# ARS Futuro

Sistema web para gestionar afiliados, autorizaciones, reclamos, proveedores, servicios médicos, pagos y facturación de una Administradora de Riesgos de Salud. El cliente usa React y Vite. La API usa Express y TypeScript, con PostgreSQL y Prisma para persistencia.

## Equipo

INF-5250 · Ingeniería de Software II · 2026-2 · Sección Z01

Profesor Amancio Lorenzo Lorenzo · Grupo The Code Society

| Integrante | Matrícula | Rol |
| --- | --- | --- |
| Anderson Antonio Castillo Peláez | 100631535 | Desarrollador full-stack |
| Kleiber Gabriel Pérez Montero | 100453725 | Desarrollador backend y QA |
| Eric Vladimir Tejada Nieve | FF1944 | Desarrollador frontend |
| Mayobanex Vicente Soto | 100417556 | Desarrollador frontend |

## Estado y tecnologías

[![Versión](https://img.shields.io/github/v/release/kleibergpm/INF-5250-arsfuturo?logo=github&label=version)](https://github.com/kleibergpm/INF-5250-arsfuturo/releases)
[![Último commit](https://img.shields.io/github/last-commit/kleibergpm/INF-5250-arsfuturo/qa-environment?logo=github)](https://github.com/kleibergpm/INF-5250-arsfuturo/commits/qa-environment)
[![Issues](https://img.shields.io/github/issues/kleibergpm/INF-5250-arsfuturo?logo=github)](https://github.com/kleibergpm/INF-5250-arsfuturo/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/kleibergpm/INF-5250-arsfuturo?logo=github)](https://github.com/kleibergpm/INF-5250-arsfuturo/pulls)
[![Quality Checks](https://github.com/kleibergpm/INF-5250-arsfuturo/actions/workflows/quality.yml/badge.svg)](https://github.com/kleibergpm/INF-5250-arsfuturo/actions/workflows/quality.yml)

[![Node.js 24](https://img.shields.io/badge/Node.js-24_LTS-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/en/download)
[![pnpm 10](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3-2684A0)](https://recharts.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF)](https://motion.dev/)

[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14%2B-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)](https://zod.dev/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens)](https://github.com/auth0/node-jsonwebtoken)
[![Swagger](https://img.shields.io/badge/API-Swagger-85EA2D?logo=swagger&logoColor=black)](https://swagger.io/)

[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=black)](https://biomejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-5-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Husky](https://img.shields.io/badge/Husky-Git_hooks-79589F)](https://typicode.github.io/husky/)
[![k6](https://img.shields.io/badge/Load_testing-k6-7D64FF?logo=k6&logoColor=white)](https://k6.io/)

### 1. Instala las herramientas

1. Instala **Git** con las opciones predeterminadas. [Git para Windows](https://git-scm.com/install/win)
2. Instala **Node.js 24 LTS** con el instalador de Windows. [Descargas de Node.js](https://nodejs.org/en/download)
3. Instala **PostgreSQL 14 o posterior**. En el instalador de Windows selecciona el servidor de PostgreSQL y pgAdmin. Conserva el puerto `5432` si está libre y guarda la contraseña que eliges para el usuario `postgres`. La necesitarás para conectar la aplicación a la base. [Instalador de PostgreSQL](https://www.postgresql.org/download/windows/)


### 2. Descarga el proyecto

Abre en el Explorador la carpeta donde quieres guardar el proyecto. Escribe `powershell` en la barra de direcciones y pulsa Enter. En esa terminal ejecuta:

```powershell
git clone https://github.com/kleibergpm/INF-5250-arsfuturo.git
cd arsfuturo
```



### 3. Crea la base de datos local

Copia `backend/.env.example` a `backend/.env`, crea en PostgreSQL la base que usarás en desarrollo y configura DATABASE_URL y JWT_SECRET

1. Abre **pgAdmin** desde Inicio y despliega **Servers**. Si ya aparece tu servidor PostgreSQL, ábrelo y usa la contraseña de `postgres` elegida durante la instalación.
2. Haz clic derecho en **Databases → Create → Database**. Escribe `ars_futuro_prisma_local` como nombre, elige `postgres` como propietario y pulsa **Save**. Comprueba que la base aparece debajo de **Databases**. [Creación de una base en pgAdmin](https://www.pgadmin.org/docs/pgadmin4/latest/database_dialog.html)

Usa una base nueva y vacía para este backend. Si ya tienes una base `ars_futuro` de una versión anterior con tablas en español, no la borres ni la reutilices: conserva sus datos y apunta `backend/.env` a `ars_futuro_prisma_local` (como en `.env.example`).

### 4 Instala las dependencias y prepara los datos

Ejecuta estos comandos desde `arsfuturo`, uno por uno. La primera instalación necesita internet y puede tardar varios minutos.

```powershell
pnpm install
pnpm run install:all
```

Aplica las migraciones y, si necesitas datos de demostración, ejecuta el seed en una base local.
```powershell
pnpm -C backend exec prisma migrate deploy
pnpm -C backend run prisma:seed
```

l primer comando crea las tablas en la base local. El último carga los datos de prueba y las cuentas de demostración. Espera a que indique que el seed terminó antes de abrir la aplicación.

### 6. Inicia y abre ARS Futuro

```powershell
pnpm dev:all
```

Mantén abierta la terminal. Abre [ARS Futuro](http://localhost:5173) en el navegador e inicia sesión con `admin` y `admin123`. Si quieres verificar la API por separado, abre [el chequeo de salud](http://localhost:4000/health). Debe mostrar `{"status":"ok"}`. La [documentación interactiva de la API](http://localhost:4000/api/docs) también queda disponible.

Para detener la aplicación, vuelve a la terminal y pulsa `Ctrl+C`. Si Windows pregunta si deseas terminar el trabajo por lotes, confirma.

### Acceso demo

El seed carga, entre otras, estas cuentas para desarrollo local.

| Usuario | Contraseña | Rol |
| --- | --- | --- |
| `admin` | `admin123` | Administrador |
| `agente` | `agente123` | Agente |
| `supervisor` | `super123` | Supervisor |
| `afiliado` | `afiliado123` | Afiliado |

## Documentación

- [Índice de documentación](docs/README.md), con arquitectura, diseño, calidad y decisiones del WBS.
- [Backend](backend/README.md), con configuración de PostgreSQL, migraciones y API.
- [Frontend](FrontEnd/README.md), con estructura y comandos del cliente.
- [Pruebas de carga](backend/k6/README.md) y [MCP de diseño](mcp/frontend-design/README.md).
- [Guía de agentes](AGENTS.md), con instrucciones específicas enlazadas por módulo.
