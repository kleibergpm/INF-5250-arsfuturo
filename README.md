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

## Preparación local

Esta guía parte de una instalación nueva en **Windows con PowerShell**. Abre PowerShell desde el menú Inicio y ejecuta cada bloque en orden. Cuando un comando falle, revisa el mensaje antes de continuar con el siguiente paso.

### 1. Instala las herramientas

1. Instala **Git** con las opciones predeterminadas. [Git para Windows](https://git-scm.com/install/win)
2. Instala **Node.js 24 LTS** con el instalador de Windows. [Descargas de Node.js](https://nodejs.org/en/download)
3. Instala **PostgreSQL 14 o posterior**. En el instalador de Windows selecciona el servidor de PostgreSQL y pgAdmin. Conserva el puerto `5432` si está libre y guarda la contraseña que eliges para el usuario `postgres`. La necesitarás para conectar la aplicación a la base. [Instalador de PostgreSQL](https://www.postgresql.org/download/windows/)

Cierra PowerShell y vuelve a abrirlo para que reconozca las herramientas. Ejecuta:

```powershell
git --version
node --version
corepack.cmd --version
corepack.cmd enable pnpm
```

Git y Corepack deben mostrar una versión y Node.js debe mostrar `v24.x.x`. Corepack habilita pnpm y selecciona la versión indicada por el proyecto. Si `corepack.cmd enable pnpm` da **Acceso denegado**, ejecútalo una vez en PowerShell como administrador y vuelve a la terminal normal. [Corepack](https://github.com/nodejs/corepack#how-to-install)

### 2. Descarga el proyecto

Abre en el Explorador la carpeta donde quieres guardar el proyecto. Escribe `powershell` en la barra de direcciones y pulsa Enter. En esa terminal ejecuta:

```powershell
git clone --branch qa-environment https://github.com/kleibergpm/INF-5250-arsfuturo.git arsfuturo
cd arsfuturo
git branch --show-current
pnpm.cmd --version
```

Git debe mostrar `qa-environment` y pnpm, `10.20.0`. Si GitHub pide iniciar sesión, usa una cuenta con acceso al repositorio. Desde aquí, mantén la terminal en `arsfuturo` para todos los comandos. Puedes comprobar que estás en la carpeta correcta con `Get-ChildItem`. Deberías ver `backend`, `FrontEnd` y `package.json`.

### 3. Crea la base de datos local

1. Abre **pgAdmin** desde Inicio y despliega **Servers**. Si ya aparece tu servidor PostgreSQL, ábrelo y usa la contraseña de `postgres` elegida durante la instalación.
2. Si no hay un servidor registrado, haz clic derecho en **Servers → Register → Server**. En **General** escribe `PostgreSQL local`. En **Connection**, usa `localhost` como host, `5432` como puerto y `postgres` en **Maintenance database** y **Username**. Escribe la contraseña de PostgreSQL y guarda. Si durante la instalación elegiste otro puerto, usa ese mismo aquí. [Conexión en pgAdmin](https://www.pgadmin.org/docs/pgadmin4/latest/server_dialog.html)
3. Haz clic derecho en **Databases → Create → Database**. Escribe `ars_futuro` como nombre, elige `postgres` como propietario y pulsa **Save**. Comprueba que la base aparece debajo de **Databases**. [Creación de una base en pgAdmin](https://www.pgadmin.org/docs/pgadmin4/latest/database_dialog.html)

### 4. Configura la aplicación

En PowerShell, pega este bloque completo. Cuando pida la contraseña, escribe la de **PostgreSQL**. La entrada se oculta. El bloque prepara el archivo `backend/.env`, codifica los símbolos de la contraseña para que funcionen en la URL y genera una clave privada para la sesión. Si ya existen archivos `.env`, conserva su contenido.

```powershell
if (-not (Test-Path backend/.env)) {
    $pgPort = '5432'
    $pgPassword = Read-Host 'Contraseña del usuario postgres' -AsSecureString
    $pgPasswordUrl = [uri]::EscapeDataString([System.Net.NetworkCredential]::new('', $pgPassword).Password)
    $jwtSecret = node -p "require('node:crypto').randomBytes(32).toString('hex')"
    @"
PORT=4000
DATABASE_URL="postgresql://postgres:${pgPasswordUrl}@localhost:${pgPort}/ars_futuro?schema=public"
JWT_SECRET="$jwtSecret"
CORS_ORIGIN="http://localhost:5173"
"@ | Set-Content -Encoding ascii backend/.env
    Remove-Variable pgPassword, pgPasswordUrl, jwtSecret
}
if (-not (Test-Path FrontEnd/.env)) {
    Copy-Item FrontEnd/.env.example FrontEnd/.env
}
```

Si PostgreSQL usa otro puerto, cambia `5432` en el bloque antes de ejecutarlo. Verifica los archivos con `Test-Path backend/.env, FrontEnd/.env`. PowerShell debe imprimir `True` dos veces. Si ya tenías una configuración local, consulta las [variables del backend](backend/README.md#variables-de-entorno) para revisarla. Mantén `backend/.env` en tu equipo.

### 5. Instala las dependencias y prepara los datos

Ejecuta estos comandos desde `arsfuturo`, uno por uno. La primera instalación necesita internet y puede tardar varios minutos.

```powershell
pnpm.cmd install
pnpm.cmd run install:all
pnpm.cmd -C backend exec prisma migrate deploy
pnpm.cmd -C backend run prisma:seed
```

Los primeros dos comandos instalan las dependencias y generan el cliente de Prisma. El tercero crea las tablas en la base local. El último carga los datos de prueba y las cuentas de demostración. Espera a que indique que el seed terminó antes de abrir la aplicación.

### 6. Inicia y abre ARS Futuro

```powershell
pnpm.cmd run dev:all
```

Mantén abierta la terminal. Abre [ARS Futuro](http://localhost:5173) en el navegador e inicia sesión con `admin` y `admin123`. Si quieres verificar la API por separado, abre [el chequeo de salud](http://localhost:4000/health). Debe mostrar `{"status":"ok"}`. La [documentación interactiva de la API](http://localhost:4000/api/docs) también queda disponible.

Para detener la aplicación, vuelve a la terminal y pulsa `Ctrl+C`. Si Windows pregunta si deseas terminar el trabajo por lotes, confirma.

### Si algo falla

| Mensaje o síntoma | Qué revisar |
| --- | --- |
| PowerShell dice que `git`, `node` o `pnpm.cmd` no se reconoce | Cierra y reabre PowerShell tras instalar las herramientas. Verifica versiones en el paso 1 y repite la habilitación de pnpm si hace falta. |
| `corepack.cmd` no se reconoce | Comprueba que instalaste Node.js 24 LTS y reabre PowerShell. Si tu instalación de Node no incluye Corepack, sigue sus [instrucciones oficiales](https://github.com/nodejs/corepack#how-to-install) y vuelve al paso 1. |
| Git dice que `arsfuturo` ya existe | Si ya clonaste el proyecto, entra a esa carpeta. Para una copia nueva, elige una carpeta de destino distinta en el comando de clonación. |
| `package.json` no encontrado | Entra con `cd arsfuturo` y comprueba la carpeta con `Get-ChildItem`. |
| Prisma indica que no puede conectarse a la base | Abre **Servicios** en Windows y comprueba que el servicio de PostgreSQL esté en ejecución. Revisa el puerto y la contraseña, y verifica que `ars_futuro` aparezca en pgAdmin. |
| El puerto `4000` ya está en uso | Detén la otra instancia. Para usar `4001`, cambia `PORT=4001` en `backend/.env` y `VITE_API_URL=http://localhost:4001/api` en `FrontEnd/.env`. Reinicia `dev:all` y comprueba `http://localhost:4001/health`. |
| El puerto `5173` ya está en uso | Detén la otra instancia. Para usar `5174`, cambia `CORS_ORIGIN` en `backend/.env` a `"http://localhost:5174"`, ejecuta `$env:FRONTEND_PORT = '5174'` en la terminal y vuelve a iniciar `dev:all`. Abre `http://localhost:5174`. |
| La página abre, pero el usuario demo no entra | Confirma que `/health` responde y que el seed del paso 5 terminó. Usa `admin` y `admin123`. |

Si usas macOS o Linux, instala las versiones indicadas de [Git](https://git-scm.com/download), [Node.js](https://nodejs.org/en/download) y [PostgreSQL](https://www.postgresql.org/download/). Las instrucciones de pgAdmin son las mismas. Usa `corepack enable pnpm` y `pnpm` sin `.cmd`. Copia `backend/.env.example` a `backend/.env` y `FrontEnd/.env.example` a `FrontEnd/.env` con `cp`. Completa la [configuración del backend](backend/README.md#variables-de-entorno) y continúa en el paso 5.

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
