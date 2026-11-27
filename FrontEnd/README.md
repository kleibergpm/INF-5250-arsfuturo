# Frontend de ARS Futuro

Cliente React y TypeScript, con Vite, Tailwind CSS, Recharts y Framer Motion. Sigue la [preparación local](../README.md#preparación-local) para iniciar la API y el cliente juntos. Para trabajar solo con Vite, ejecuta los comandos desde `FrontEnd/`.

```bash
pnpm install
pnpm run dev
```

El cliente se sirve en `http://localhost:5173`. Consulta `FrontEnd/.env.example` para cambiar `VITE_API_URL`, cuyo valor predeterminado es `http://localhost:4000/api`.

## Estructura

| Ruta | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Sesión, carga de datos y navegación |
| `src/api/` | Cliente HTTP, adaptadores de datos y mensajes de registro |
| `src/domains/` | Vistas, formularios y operaciones por módulo |
| `src/components/` | Controles compartidos, modales y barra de navegación |
| `src/lib/` | Formato, exportación de CSV y tema |
| `src/index.css` | Tokens visuales y breakpoints |

Los CSV se generan con el exportador compartido. El nombre sigue el formato `Arsfuturo-NombreDeVentana.csv` y la normalización de tildes se aplica al archivo descargado.

## Validación

```bash
pnpm run check
pnpm run typecheck
pnpm run build
```

Usa `pnpm run preview` para servir el build. Consulta la [guía de diseño](../docs/DESIGN.md), las [convenciones de código](../docs/CODING_CONVENTIONS.md) y las [instrucciones del frontend](AGENTS.md).
