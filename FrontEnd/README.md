# FrontEnd ARS Futuro

Aplicación web cliente en React 19, TypeScript y Vite para la gestión de afiliados, proveedores, planes, pólizas, autorizaciones, pagos, facturas y notificaciones.

## Índice

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Ejecutar en desarrollo](#ejecutar-en-desarrollo)
- [Build de producción](#build-de-producción)
- [Scripts disponibles](#scripts-disponibles)
- [Dependencias del proyecto](#dependencias-del-proyecto)
- [Estructura principal](#estructura-principal)
- [Convenciones](#convenciones)

## Requisitos

- Node.js 20.19+ o 22.12+ (Vite 8 los requiere)
- pnpm
- API backend ejecutándose en `http://localhost:4000`

## Instalación

Desde la carpeta del frontend:

```bash
cd FrontEnd
pnpm install
```

Configura la URL de la API copiando el archivo de ejemplo:

```bash
cp .env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Variables de entorno

Ejemplo de `.env`:

```env
VITE_API_URL=http://localhost:4000/api
```

La aplicación usa `VITE_API_URL` para construir las peticiones y, si no se define, utiliza `http://localhost:4000/api`. Las variables de Vite quedan disponibles en el navegador: nunca pongas aquí contraseñas, tokens privados ni claves de proveedores de IA.

## Ejecutar en desarrollo

```bash
pnpm run dev
```

La app quedará disponible en:

- `http://localhost:5173`

## Build de producción

```bash
pnpm run build
```

Puedes previsualizar el build con:

```bash
pnpm run preview
```

## Scripts disponibles

| Comando             | Descripción                                          |
| ------------------- | ---------------------------------------------------- |
| `pnpm run dev`      | Inicia Vite en modo desarrollo                       |
| `pnpm run build`    | Compila la aplicación para producción                |
| `pnpm run preview`  | Sirve el build compilado localmente                  |
| `pnpm run typecheck`| Verifica los tipos de TypeScript                      |
| `pnpm run format`   | Aplica el formateador de Biome                      |
| `pnpm run lint`     | Ejecuta solo el linter de Biome                      |
| `pnpm run check`    | Ejecuta las comprobaciones de Biome                  |
| `pnpm run check:fix`| Aplica las correcciones de Biome                   |

`format`, `lint` y `check:fix` pueden modificar archivos: revisa el diff después de ejecutarlos.

## Dependencias del proyecto

El frontend usa:

- React 19 y React DOM
- Vite 8 con el plugin de React
- TypeScript
- Tailwind CSS 4
- Axios
- React Router
- Formik y Yup
- Recharts
- Framer Motion
- Lucide React
- Biome para formato y lint

Asegúrate de que la API backend esté corriendo antes de realizar pruebas funcionales desde la interfaz. La capa de datos está separada de la interfaz: `src/api/client.ts` centraliza las peticiones y el token, y `src/api/adapters.ts` traduce los payloads del backend a los modelos que se muestran en la interfaz.

## Estructura principal

```text
FrontEnd/
├── public/                 # recursos públicos
├── src/
│   ├── api/
│   │   ├── adapters.ts     # adaptación de payloads y modelos de la interfaz
│   │   └── client.ts       # cliente HTTP, token y URL base de la API
│   ├── components/
│   │   ├── AppChrome.tsx   # cabecera y navegación de la aplicación
│   │   └── ui.tsx          # componentes reutilizables (Button, Card, Modal, Badge…)
│   ├── lib/
│   │   └── formatters.ts   # formato de moneda y fechas, exportación CSV
│   ├── index.css           # tokens de color por tema, estados y breakpoints de Tailwind
│   ├── App.tsx             # shell principal de la aplicación
│   └── main.tsx            # punto de entrada
├── .env.example
├── AGENTS.md               # guía de agentes del FrontEnd
├── biome.json              # configuración de formato y lint
├── index.html
└── vite.config.ts
```

## Convenciones

- Las reglas de diseño están en [DESIGN.md](../DESIGN.md) y las convenciones generales en [CODING_CONVENTIONS.md](../CODING_CONVENTIONS.md).
- Los componentes de `src/components/ui.tsx` son la base de la interfaz: reutilízalos antes de crear estilos nuevos.
- La escala responsive está en el bloque `@theme` de `src/index.css`: el estilo base sin prefijo cubre el móvil pequeño, `mobile-m:` aplica desde 430 px y `mobile-l:` desde 768 px. Usa `sm:`, `md:` y `lg:` para anchos mayores.
- Los colores viven como tokens en `src/index.css`; el toggle de la cabecera alterna entre el tema claro (por defecto) y el tema negro de teal profundo, y la preferencia se guarda en `localStorage` con la clave `arsfuturo_tema`.
- Las decisiones de negocio (coberturas, permisos, importes, aprobaciones) siempre provienen del backend; el cliente solo las presenta.
- Las acciones de aprobar, rechazar, pagar o suspender invocan los endpoints explícitos del backend, no actualizaciones genéricas.
- La guía específica para agentes está en [AGENTS.md](AGENTS.md).

Antes de entregar cambios verifica:

```bash
pnpm run typecheck
pnpm run check
pnpm run build
```
