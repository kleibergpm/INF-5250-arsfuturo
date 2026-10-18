# Backend ARS Futuro

API REST MVC para ARS Futuro, desarrollada con Express 5, TypeScript, Prisma y PostgreSQL. La aplicación usa JWT para autenticación, Zod para validación de solicitudes y Swagger para la documentación interactiva.

## Índice

- [Instalación local](#instalación-local)
- [Variables de entorno](#variables-de-entorno)
- [Inicializar la base de datos](#inicializar-la-base-de-datos)
- [Ejecutar la API](#ejecutar-la-api)
- [API](#api)
- [Comandos disponibles](#comandos-disponibles)
- [Pruebas](#pruebas)
- [Estructura del proyecto](#estructura-del-proyecto)

## Instalación local

```bash
cd backend
pnpm install
```

Copia el archivo de ejemplo del entorno y prepara el cliente de Prisma:

```powershell
Copy-Item .env.example .env
pnpm run prisma:generate
```

## Variables de entorno

Edita el archivo `.env` con tus valores locales:

```env
PORT=4000
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro?schema=public"
SHADOW_DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro_shadow?schema=public"
JWT_SECRET="una-clave-larga-y-privada"
CORS_ORIGIN="http://localhost:5173"
```

### Descripción de variables

| Variable              | Obligatoria | Descripción                                                  |
| --------------------- | :---------: | ------------------------------------------------------------ |
| `PORT`                |      —      | Puerto en el que correrá la API (4000 por defecto)            |
| `DATABASE_URL`        |      ✅     | Conexión a PostgreSQL                                         |
| `SHADOW_DATABASE_URL` |      —      | Conexión opcional a una base shadow para `prisma migrate dev`  |
| `JWT_SECRET`          |      ✅     | Clave para firmar tokens JWT                                  |
| `CORS_ORIGIN`         |      —      | Origen permitido por CORS del frontend                         |

> El archivo `.env.example` ya está incluido en la carpeta backend y sirve como base segura para la configuración local. `SHADOW_DATABASE_URL` es opcional: solo se usa al crear migraciones nuevas.

## Base de datos

El schema vive en `prisma/schema.prisma` y las migraciones en `prisma/migrations/`. La configuración de Prisma 7 está en `prisma.config.ts`, que carga el `.env` y expone `SHADOW_DATABASE_URL` solo si existe.

Inicializa la base aplicando las migraciones:

```bash
pnpm exec prisma migrate deploy
pnpm run prisma:seed
```

Si prefieres sincronizar el schema directamente, sin historial de migraciones:

```bash
pnpm exec prisma db push
```

Si solo deseas reiniciar los datos demo, puedes ejecutar:

```bash
pnpm run prisma:seed
```

Para crear una migración nueva a partir de cambios en el schema:

```bash
pnpm run prisma:migrate
```

### Instalación manual con SQL (alternativa)

`sql/init-postgresql.sql` contiene el esquema consolidado actual, incluido `INSURED` y `users.national_id`. `sql/seed-postgresql.sql` contiene datos demo compatibles con ese esquema. Sobre una base **vacía creada previamente**, desde `backend/`:

```bash
psql -d ars_futuro -v ON_ERROR_STOP=1 -f sql/init-postgresql.sql
psql -d ars_futuro -v ON_ERROR_STOP=1 -f sql/seed-postgresql.sql
```

No hace falta ejecutar el SQL de cada migración manualmente. El flujo recomendado al clonar sigue siendo `pnpm exec prisma migrate deploy` y `pnpm run prisma:seed`; Prisma aplica automáticamente el historial en orden. Se conservan los archivos de `prisma/migrations/` para actualizar bases existentes.

Elige una sola forma de inicializar y un solo seed. No ejecutes `init-postgresql.sql` sobre una base existente ni combines los dos seeds. Si inicializaste con SQL y luego vas a usar Prisma Migrate, registra primero las migraciones incluidas en el esquema consolidado (sin volver a ejecutarlas):

```bash
pnpm exec prisma migrate resolve --applied 20260917235148_first_migration
pnpm exec prisma migrate resolve --applied 20261018000000_insured_registration
```


Los datos iniciales del seed incluyen:

- `admin / admin123` y `admin2 / admin456` (administradores)
- `agente / agente123`, `agente2 / agente456` y `agente3 / agente789` (agentes)
- `supervisor / super123` y `supervisor2 / super456` (supervisores)
- `afiliado / afiliado123` (rol `INSURED`, cédula ficticia `00112345678`, asociada al primer afiliado demo)

## Ejecutar la API

```bash
pnpm run dev
```

Verifica:

- `http://localhost:4000/health`
- `http://localhost:4000/api/docs`

## API

Todos los endpoints, salvo `POST /api/auth/login`, `POST /api/auth/register` y `/health`, requieren autenticación con `Authorization: Bearer <token>`.

Los roles disponibles son `ADMINISTRATOR`, `AGENT`, `SUPERVISOR` e `INSURED`, y cada ruta declara explícitamente quién puede usarla.

### Recursos principales

- `/api/afiliados`
- `/api/proveedores`
- `/api/planes`
- `/api/polizas`
- `/api/reclamos`
- `/api/autorizaciones`
- `/api/mis-autorizaciones` (consulta propia del rol `INSURED`)
- `/api/servicios`
- `/api/pagos`
- `/api/facturas`
- `/api/notificaciones`

### Operaciones de negocio

- `/api/reclamos/:id/aprobar`
- `/api/reclamos/:id/rechazar`
- `/api/autorizaciones/:id/aprobar`
- `/api/autorizaciones/:id/rechazar`
- `/api/facturas/generar`
- `/api/facturas/:id/pagar`
- `/api/facturas/:id/recordatorio`
- `/api/facturas/:id/gracia`
- `/api/facturas/:id/suspender`
- `/api/dashboard/resumen`

## Comandos disponibles

| Comando                | Descripción                                              |
| ---------------------- | -------------------------------------------------------- |
| `pnpm run dev`         | Desarrollo con recarga automática (`tsx watch`)           |
| `pnpm run start`       | Inicia la API sin watch                                   |
| `pnpm run typecheck`   | Verifica TypeScript                                       |
| `pnpm test`            | Ejecuta las pruebas con Vitest                            |
| `pnpm run check`       | Ejecuta Biome sobre `src`, `tests` y `prisma`             |
| `pnpm run check:fix`   | Aplica las correcciones de Biome                         |
| `pnpm run prisma:generate` | Genera el cliente en `src/lib/generated/client`       |
| `pnpm run prisma:migrate`  | Crea y aplica una migración nueva                    |
| `pnpm run prisma:seed`      | Carga los datos demo                                |

## Pruebas

Las pruebas usan Vitest y no requieren la base de datos:

```bash
pnpm test
```

Para ejecutar una sola prueba:

```bash
pnpm exec vitest run tests/auth.test.ts
```

Las convenciones de cobertura por endpoint están en [tests/AGENTS.md](tests/AGENTS.md). Para pruebas de carga y humo consulta la [guía de K6](k6/README.md).

## Estructura del proyecto

```text
backend/
├── k6/                    # pruebas de carga y humo con K6
├── prisma/
│   ├── migrations/        # historial de migraciones
│   ├── schema.prisma      # modelo de datos
│   └── seed.ts            # datos demo
├── src/
│   ├── controllers/       # manejo de solicitudes HTTP
│   ├── lib/               # configuración, Prisma y Swagger
│   ├── middleware/        # autenticación, autorización, validación y errores
│   ├── routes/            # registro de rutas, permisos y esquemas Zod
│   ├── services/          # lógica reutilizable del dominio
│   ├── Servicios/         # integraciones con servicios externos
│   ├── app.ts             # configuración de Express y montaje de rutas
│   └── server.ts          # arranque del servidor
├── tests/                 # pruebas automatizadas
├── AGENTS.md              # guía de agentes del backend
└── README.md
```

El proyecto usa ESM (`type: module` con `NodeNext`), por lo que los imports locales de TypeScript llevan el especificador `.js`.

## Documentación relacionada

- [README del repositorio](../README.md)
- [Arquitectura del sistema](../ARCHITECTURE.md)
- [Convenciones de código](../CODING_CONVENTIONS.md)
- [Guía de agentes del backend](AGENTS.md)
- [Pruebas de carga con K6](k6/README.md)
