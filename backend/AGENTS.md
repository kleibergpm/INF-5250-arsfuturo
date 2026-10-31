# Guía de agentes del backend

Esta guía aplica a todo el contenido de `backend/`. Las instrucciones de [../AGENTS.md](../AGENTS.md) también aplican; este archivo añade reglas específicas de la API.

## Responsabilidad

`backend/` contiene la API REST de ARS Futuro, desarrollada con Express 5, TypeScript, Prisma y PostgreSQL. La API es la fuente de verdad para autenticación, autorización, validación y reglas de negocio.

- `src/app.ts`: configura Express, middleware, health check, Swagger y manejo de errores.
- `src/server.ts`: inicia el servidor HTTP.
- `src/routes/index.ts`: registra rutas, validaciones y permisos.
- `src/controllers/`: recibe solicitudes y coordina operaciones.
- `src/services/`: concentra lógica reutilizable que cruza controladores.
- `src/middleware/`: autenticación, autorización, validación y errores.
- `src/lib/`: configuración, Prisma y Swagger.
- `prisma/schema.prisma`: modelo de PostgreSQL.
- `prisma/seed.ts`: datos iniciales para desarrollo.
- `tests/`: pruebas automatizadas.
- `k6/`: pruebas de carga y humo.

## Comandos

Ejecuta todos los comandos desde este directorio:

```bash
pnpm install
pnpm run dev
pnpm run start
pnpm run typecheck
pnpm test
pnpm exec vitest run tests/auth.test.ts
pnpm run check
pnpm run check:fix
```

`pnpm run check:fix` modifica archivos; úsalo solo cuando quieras aplicar las correcciones de Biome.

## Base de datos

- Configura `DATABASE_URL` y `JWT_SECRET` en `.env` fuera de `NODE_ENV=test`.
- Después de cambiar `prisma/schema.prisma`, ejecuta `pnpm run prisma:generate`.
- Para inicializar una base local, ejecuta `pnpm exec prisma db push` y después `pnpm run prisma:seed`.
- Usa `pnpm run prisma:migrate` solo cuando el flujo de migraciones sea intencional y esté coordinado con el equipo.
- No mezcles `prisma db push` con los scripts manuales de `sql/` sobre la misma base inicializada.
- No incluyas secretos, credenciales reales ni archivos `.env` en commits.

## Diseño de la API

- Todas las rutas protegidas deben usar `authenticate` y el control de roles mediante `allow`.
- Valida cuerpos, parámetros y consultas con Zod antes de ejecutar lógica de negocio.
- Usa controladores y servicios para reglas del dominio; no traslades decisiones críticas al frontend.
- Mantén los imports locales con extensión `.js`, porque el proyecto usa ESM y `NodeNext`.
- Conserva las respuestas y nombres de payload compatibles con `FrontEnd/src/api/adapters.ts`.
- Para cambios de estado importantes, crea endpoints de negocio explícitos en lugar de permitir actualizaciones CRUD genéricas.
- No registres contraseñas, tokens, datos de salud ni payloads sensibles completos en logs.

## Autenticación y permisos

Los roles disponibles son `ADMINISTRATOR`, `AGENT` y `SUPERVISOR`. Antes de añadir una ruta, define claramente:

1. Si es pública o requiere JWT.
2. Qué roles pueden utilizarla.
3. Qué datos puede consultar o modificar cada rol.
4. Qué esquema Zod valida la entrada.
5. Qué prueba cubre el caso autorizado y el rechazado.

## Integración de IA

La IA se integra únicamente desde el backend:

- Nunca expongas claves de proveedores en el frontend.
- Crea endpoints específicos bajo `/api/ai` y reutiliza autenticación, roles y validación.
- Mantén el SDK externo detrás de un adaptador propio (`services/ai/provider.ts`).
- Construye el contexto con consultas mínimas y autorizadas; no envíes el modelo completo si no es necesario.
- Valida toda salida del modelo con Zod antes de presentarla o persistirla.
- La IA puede resumir, explicar o priorizar, pero no debe aprobar, rechazar, pagar o suspender automáticamente.
- Registra auditoría, límites de costo, timeout, fallback y revisión humana.
- Implementa primero un proveedor mock para pruebas deterministas.

## Validación antes de entregar cambios

Desde `backend/` ejecuta como mínimo:

```bash
pnpm run typecheck
pnpm test
pnpm run check
```

Si cambiaste el schema de Prisma, incluye también `pnpm run prisma:generate`. Si cambiaste endpoints o permisos, añade o actualiza pruebas y revisa la documentación Swagger.
