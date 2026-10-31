# Guía de agentes de ARS Futuro

## Gestor de paquetes

- Usa exclusivamente `pnpm`. No ejecutes `npm`, `npx` ni actualices archivos `package-lock.json`.
- El repositorio no es un workspace raíz: ejecuta los comandos desde `backend/` o `FrontEnd/`, cada uno con su propio `pnpm-lock.yaml`.

## Estructura del proyecto

- `backend/` contiene la API de Express 5. `src/app.ts` configura el middleware y monta `src/routes/index.ts` en `/api`; `src/server.ts` inicia el servidor.
- `backend/prisma/schema.prisma` define el modelo de datos de PostgreSQL. La API usa Prisma y validación de solicitudes con Zod en el módulo de rutas.
- `FrontEnd/` contiene el cliente React con Vite. `src/App.tsx` es el shell actual de la aplicación; `src/api/client.ts` concentra las peticiones HTTP, la inyección del token y `VITE_API_URL` (por defecto: `http://localhost:4000/api`).

## Comandos

- Regenerar el changelog desde la raíz: `pnpm run changelog`.
- Ejecutar el MCP de diseño frontend: `pnpm run mcp:frontend-design`.
- Instalar y comprobar el backend: `cd backend && pnpm install && pnpm run typecheck && pnpm test`.
- Ejecutar una prueba del backend: `cd backend && pnpm exec vitest run tests/auth.test.ts`.
- Formatear y revisar el backend: `cd backend && pnpm exec biome check src tests prisma` (añade `--write` solo cuando quieras aplicar correcciones).
- Iniciar la API: `cd backend && pnpm run dev`. Sirve `/health`, `/api` y `/api/docs` en el puerto `4000` por defecto.
- Instalar y compilar el frontend: `cd FrontEnd && pnpm install && pnpm run build`.
- Revisar el frontend: `cd FrontEnd && pnpm exec biome check src`.
- Iniciar el cliente: `cd FrontEnd && pnpm run dev` (puerto `5173` por defecto). Define `VITE_API_URL` en `FrontEnd/.env` si la API está en otra dirección.

## Base de datos y entorno

- Fuera de `NODE_ENV=test`, el backend requiere `DATABASE_URL` y `JWT_SECRET`; copia `backend/.env.example` a `backend/.env` y configura PostgreSQL primero.
- `SHADOW_DATABASE_URL` es opcional para generar Prisma y usar `prisma db push`; configúrala si vas a usar una base shadow dedicada con `prisma migrate dev`.
- Después de cambiar `backend/prisma/schema.prisma`, ejecuta `cd backend && pnpm run prisma:generate`.
- Para inicializar las tablas administradas por Prisma, ejecuta `cd backend && pnpm exec prisma db push` y luego `pnpm run prisma:seed`.
- No combines `prisma db push` con los scripts manuales de `backend/sql/` sobre la misma base ya inicializada.

## Convenciones e integración

- Usa mensajes de commit con formato Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`) para que `pnpm run changelog` pueda agrupar los cambios automáticamente.
- Biome está configurado en cada paquete: tabulaciones, comillas dobles, reglas recomendadas y organización de imports. Usa su salida en lugar de introducir otro formateador o linter.
- El backend usa ESM (`type: module` y `NodeNext`), por lo que los imports locales de TypeScript usan especificadores `.js`.
- Mantén alineadas las claves del payload y los modelos en español mediante `FrontEnd/src/api/adapters.ts`; no evadas el cliente API al añadir flujos conectados al backend.
- Las suites de K6 en `backend/k6/` requieren una API activa y credenciales sembradas. Ejecútalas con `cd backend && k6 run k6/auth-smoke.js` (o con los demás archivos de la suite).

## Integración de IA

- La IA debe integrarse detrás del backend; nunca expongas claves de proveedores en `FrontEnd/`.
- Todo endpoint de IA debe reutilizar `authenticate`, `allow` y `validate`.
- Comienza con funciones asistivas y de solo lectura. Las decisiones sobre autorizaciones, reclamos o pagos deben seguir requiriendo aprobación humana.
- Registra usuario, propósito, entrada resumida, proveedor, modelo, versión de prompt, resultado y revisión humana sin almacenar datos sensibles innecesarios.
- Usa adaptadores de proveedor para evitar acoplar la lógica de negocio a un SDK específico y permite sustituir el proveedor sin cambiar la interfaz.
- El MCP de diseño frontend es local, de solo lectura y no debe recibir secretos ni datos de producción.
