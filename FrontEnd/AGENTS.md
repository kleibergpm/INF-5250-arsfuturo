# Guía de agentes del FrontEnd

Esta guía aplica a todo el contenido de `FrontEnd/`. Las instrucciones de [../AGENTS.md](../AGENTS.md) también aplican; este archivo añade reglas específicas del cliente web.

## Responsabilidad

`FrontEnd/` contiene la aplicación web de ARS Futuro, desarrollada con React 19, TypeScript, Vite y Tailwind CSS 4.

- `src/App.tsx`: shell actual, navegación, sesión y vistas principales.
- `src/main.tsx`: punto de entrada de React.
- `src/api/client.ts`: peticiones HTTP, token y URL base de la API.
- `src/api/adapters.ts`: adaptación entre payloads del backend y modelos presentados en español.
- `src/components/`: componentes reutilizables de interfaz.
- `public/`: recursos públicos.

## Comandos

Ejecuta todos los comandos desde este directorio:

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
pnpm run typecheck
pnpm run format
pnpm run lint
pnpm run check
pnpm run check:fix
```

`pnpm run format`, `pnpm run lint` y `pnpm run check:fix` pueden modificar archivos. Revisa el diff después de ejecutarlos.

## Variables de entorno

Configura `VITE_API_URL` en `.env` cuando la API no esté en la dirección predeterminada:

```env
VITE_API_URL=http://localhost:4000/api
```

Las variables de Vite quedan disponibles en el navegador. Nunca pongas aquí contraseñas, tokens privados, claves de proveedores de IA ni credenciales de bases de datos.

## Integración con la API

- Usa `src/api/client.ts` para todas las peticiones HTTP.
- Usa `src/api/adapters.ts` para traducir nombres de campos y estructuras; no dupliques adaptadores dentro de las vistas.
- Conserva el token en el mecanismo existente y no implementes otro flujo paralelo de autenticación.
- Trata como fuente de verdad las respuestas del backend para permisos, estados, importes, coberturas y reglas de negocio.
- Muestra estados de carga, errores y respuestas vacías en cualquier flujo asíncrono.
- No ocultes errores de autorización; ofrece una respuesta clara al usuario.

## React y UI

- Mantén los componentes enfocados y reutilizables cuando una vista crezca demasiado.
- Usa TypeScript y evita introducir `any` sin una justificación concreta.
- Conserva las convenciones visuales existentes antes de añadir nuevos estilos o componentes.
- No dupliques lógica de negocio en el cliente para decisiones sensibles.
- Las acciones de aprobar, rechazar, pagar o suspender deben invocar endpoints explícitos del backend.
- Revisa estados responsive y accesibilidad al modificar formularios, tablas, modales o navegación.
- Los breakpoints del tema viven en `src/index.css`: Mobile-M (`mobile-m:`, 430 px) y Mobile-L (`mobile-l:`, 768 px). Escribe primero el estilo sin prefijo para el móvil pequeño y no escribas media queries a mano.
- No escribas colores literales en componentes. Consume los tokens de `src/index.css` (`--text`, `--bg`, `--surface-solid`, `--border`, `--accent`, `--ok`, `--warn`, `--danger`) o las clases `.tone-*` y `.tone-notif-*`.
- Hay dos temas: claro (por defecto) y negro (teal profundo). Ambos se aplican con `data-theme` en `<html>`, se alternan desde el toggle de la cabecera y se persisten en `localStorage` con la clave `arsfuturo_tema`.
- En el tema negro el acento es un teal brillante y los estados conservan su color; no aplanes los tokens a grises ni a blanco y negro puros.
- Si tocas un componente que usa Recharts, propaga `tema` y usa `graficaDe(tema)`; los gráficos no heredan tokens CSS.

## Integración de IA

- El frontend solo consume endpoints de IA expuestos por el backend; nunca llama directamente a un proveedor externo.
- Presenta las respuestas de IA como sugerencias o información asistiva, no como decisiones definitivas.
- Indica estados de carga, timeout, error y respuesta no disponible.
- Para acciones sensibles, exige confirmación y conserva el flujo de revisión humana definido por el backend.
- No guardes prompts, respuestas ni datos sensibles en `localStorage` salvo que exista una decisión explícita de producto y seguridad.
- Escapa y renderiza como texto cualquier contenido generado por IA, a menos que exista un procesador seguro y justificado para otro formato.

## Validación antes de entregar cambios

Desde `FrontEnd/` ejecuta como mínimo:

```bash
pnpm run typecheck
pnpm run check
pnpm run build
```

Si cambias el cliente API, adaptadores, autenticación o un flujo conectado al backend, verifica también el comportamiento con la API ejecutándose en `http://localhost:4000`.
