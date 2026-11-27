# Backend de ARS Futuro

API REST con Express, TypeScript, Prisma y PostgreSQL. Toda la preparación de una instalación nueva está en la [guía de arranque](../README.md#preparación-local). Los comandos de esta página se ejecutan desde `backend/`.

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores locales antes de generar el cliente de Prisma.

| Variable | Valor o uso |
| --- | --- |
| `DATABASE_URL` | URL PostgreSQL obligatoria. Debe identificar la base de datos. |
| `JWT_SECRET` | Clave privada obligatoria para firmar tokens. |
| `PORT` | Puerto de la API. El valor predeterminado es `4000`. |
| `CORS_ORIGIN` | Origen HTTP del frontend. El valor predeterminado es `http://localhost:5173`. |
| `SHADOW_DATABASE_URL` | URL opcional de la base shadow para desarrollar migraciones. |

## PostgreSQL y Prisma

`prisma/schema.prisma` define los modelos. `prisma.config.ts` configura las migraciones y el seed. Aplica el historial con `pnpm exec prisma migrate deploy` y genera el cliente con `pnpm run prisma:generate`. Usa `pnpm run prisma:migrate` para crear una migración de desarrollo y `pnpm run prisma:seed` para cargar [datos demo](../README.md#acceso-demo) en una base local.

Para un prototipo sin historial puedes usar `pnpm exec prisma db push` en una base separada. Las bases compartidas se administran mediante las migraciones.

### Base existente y error P3005

Las migraciones del backend esperan una base vacía o una base cuyo esquema ya corresponda exactamente al historial Prisma. Si `prisma migrate deploy` devuelve `P3005`, no marques las migraciones como aplicadas ni borres las tablas existentes. Para desarrollo local, crea una base nueva y vacía (por ejemplo, `ars_futuro_prisma_local`), actualiza `DATABASE_URL` en `.env` y vuelve a ejecutar `pnpm exec prisma migrate deploy`. Los datos de la base anterior no se copian automáticamente.

### Instalación alternativa con SQL

Los archivos de `sql/` permiten inicializar y sembrar una base **vacía** cuando el entorno dispone de `psql`. Usa un solo método de inicialización y un solo seed.

```bash
psql -d ars_futuro -v ON_ERROR_STOP=1 -f sql/init-postgresql.sql
psql -d ars_futuro -v ON_ERROR_STOP=1 -f sql/seed-postgresql.sql
```

Si migras a Prisma Migrate desde ese esquema consolidado, comprueba primero que contiene ambas migraciones y regístralas como aplicadas.

```bash
pnpm exec prisma migrate resolve --applied 20260917235148_first_migration
pnpm exec prisma migrate resolve --applied 20261018000000_insured_registration
```

## API y estructura

`pnpm run dev` inicia la API con recarga automática. `pnpm run start` la inicia sin watch. La especificación [Swagger local](http://localhost:4000/api/docs) describe los recursos, permisos y operaciones de negocio. Las rutas protegidas usan `Authorization: Bearer <token>`.

- `src/app.ts` monta middleware y rutas. `src/server.ts` gestiona el arranque y apagado.
- `src/routes/` reúne permisos y validación Zod. `src/controllers/` coordina las operaciones.
- `src/services/` contiene servicios del dominio e integraciones. `src/lib/` contiene configuración, Prisma, logs y Swagger.
- `prisma/` contiene modelos, migraciones y seed. `tests/` contiene las pruebas de Vitest.

## Validación

```bash
pnpm run check
pnpm run typecheck
pnpm test
```

Genera el cliente de Prisma antes del typecheck y las pruebas. Vitest usa mocks para persistencia o integraciones externas y puede ejecutarse sin conectarse a PostgreSQL. Consulta la [guía de pruebas](tests/AGENTS.md) y las [suites de carga](k6/README.md).
