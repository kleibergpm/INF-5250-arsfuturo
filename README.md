# ARS Futuro

Sistema web para gestionar afiliados, autorizaciones, reclamos, proveedores, servicios médicos, pagos y facturación de una Administradora de Riesgos de Salud. El cliente usa React y Vite. La API usa Express y TypeScript, con PostgreSQL y Prisma para persistencia.

[Releases](https://github.com/kleibergpm/INF-5250-arsfuturo/releases) · [Issues](https://github.com/kleibergpm/INF-5250-arsfuturo/issues) · [Pull requests](https://github.com/kleibergpm/INF-5250-arsfuturo/pulls)

## Preparación local

La CI usa Node.js 24. Instala Node.js, pnpm 10, PostgreSQL 14 o posterior y Git. Los paquetes se instalan por separado con sus lockfiles de pnpm.

1. Clona el repositorio y entra en su carpeta.

   ```bash
   git clone https://github.com/kleibergpm/INF-5250-arsfuturo.git arsfuturo
   cd arsfuturo
   ```

2. Copia `backend/.env.example` a `backend/.env`, crea en PostgreSQL la base que usarás en desarrollo y configura `DATABASE_URL` y `JWT_SECRET`. Consulta la [configuración de la API](backend/README.md#variables-de-entorno).
3. Instala los paquetes desde la raíz. `install:all` genera el cliente de Prisma y usa la configuración del paso anterior.

   ```bash
   pnpm install
   pnpm run install:all
   ```

4. Aplica las migraciones y, si necesitas datos de demostración, ejecuta el seed en una base local.

   ```bash
   pnpm -C backend exec prisma migrate deploy
   pnpm -C backend run prisma:seed
   ```

5. Inicia ambos procesos desde la raíz.

   ```bash
   pnpm run dev:all
   ```

El [frontend](http://localhost:5173) usa la [API local](http://localhost:4000/api) por defecto. Puedes cambiar la URL en `FrontEnd/.env` con `VITE_API_URL`. La API publica [health](http://localhost:4000/health) y [Swagger](http://localhost:4000/api/docs). Detén ambos procesos con `Ctrl+C` y confirma el mensaje de la terminal si Windows lo solicita.

Si el puerto de Vite está ocupado, define `FRONTEND_PORT` antes de ejecutar `dev:all` y ajusta `CORS_ORIGIN` en el backend al nuevo origen.

### Acceso demo

El seed carga, entre otras, estas cuentas para desarrollo local.

| Usuario | Contraseña | Rol |
| --- | --- | --- |
| `admin` | `admin123` | Administrador |
| `agente` | `agente123` | Agente |
| `supervisor` | `super123` | Supervisor |
| `afiliado` | `afiliado123` | Afiliado |

## Checks y contribuciones

```bash
pnpm run check
pnpm run typecheck
pnpm -C backend test
pnpm -C FrontEnd run build
```

El hook de Husky ejecuta Biome y TypeScript. El [workflow de calidad](.github/workflows/quality.yml) también ejecuta las pruebas del backend y compila el frontend en PRs hacia `qa-environment` y `main`. Usa [Conventional Commits](docs/CODING_CONVENTIONS.md#commits-y-documentación) y `pnpm run changelog` para regenerar el [historial](CHANGELOG.md).

## Documentación

- [Índice de documentación](docs/README.md), con arquitectura, diseño, calidad y decisiones del WBS.
- [Backend](backend/README.md), con configuración de PostgreSQL, migraciones y API.
- [Frontend](FrontEnd/README.md), con estructura y comandos del cliente.
- [Pruebas de carga](backend/k6/README.md) y [MCP de diseño](mcp/frontend-design/README.md).
- [Guía de agentes](AGENTS.md), con instrucciones específicas enlazadas por módulo.

## Equipo

INF-5250 · Ingeniería de Software II · 2026-2 · Sección Z01

Profesor Amancio Lorenzo Lorenzo · Grupo The Code Society

| Integrante | Matrícula | Rol |
| --- | --- | --- |
| Anderson Antonio Castillo Peláez | 100631535 | Desarrollador full-stack |
| Kleiber Gabriel Pérez Montero | 100453725 | Desarrollador backend y QA |
| Eric Vladimir Tejada Nieve | FF1944 | Desarrollador frontend |
| Mayobanex Vicente Soto | 100417556 | Desarrollador frontend |
