**Proyecto:** ARS Futuro

Sistema full-stack para la gestión de una Administradora de Riesgos de Salud (ARS). El proyecto está compuesto por una API REST en Express y TypeScript, persistencia en PostgreSQL mediante Prisma y una aplicación web en React y Vite.

**Asignatura:** INF-5250 – Ingeniería de Software II

**Semestre:** 2026-2

**Profesor:** Amancio Lorenzo Lorenzo

**Seccion:** Z01

**Proyecto:** ARS Futuro

**Grupo:** The code society

---

## 👥 Integrantes del equipo
| Integrante                       | Matrícula | Rol |
| -------------------------------- | --------: | --------: |
| Anderson Antonio Castillo Peláez | 100631535 | Desarrollador Full-Stack |
| Kleiber Gabriel Pérez Montero    | 100453725 | Desarrollador BackEnd / QA Engineer |
| Eric Vladimir Tejada Nieve       |    FF1944 | Desarrollador FrontEnd |
| Mayobanex Vicente Soto           | 100417556 | Desarrollador FrontEnd |

---

## 📊 Estado del Proyecto

[![Version](https://img.shields.io/github/v/release/kleibergpm/arsfuturo?logo=github&label=version)](https://github.com/kleibergpm/arsfuturo/releases)
[![Last Commit](https://img.shields.io/github/last-commit/kleibergpm/arsfuturo?logo=github)](https://github.com/kleibergpm/arsfuturo/commits)
[![Issues](https://img.shields.io/github/issues/kleibergpm/arsfuturo?logo=github)](https://github.com/kleibergpm/arsfuturo/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/kleibergpm/arsfuturo?logo=github)](https://github.com/kleibergpm/arsfuturo/pulls)
[![License](https://img.shields.io/github/license/kleibergpm/arsfuturo?logo=github)](https://github.com/kleibergpm/arsfuturo/blob/main/LICENSE)

## 🛠️ Stack Tecnológico

### FrontEnd
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3-8A2BE2?logo=recharts&logoColor=white)](https://recharts.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

### BackEnd
[![Node.js](https://img.shields.io/badge/Node.js-20.19+-brightgreen?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Zod](https://img.shields.io/badge/Zod-4-3A8BFF?logo=zod&logoColor=white)](https://zod.dev/)
[![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)](https://github.com/auth0/node-jsonwebtoken)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=white)](https://swagger.io/)

### Calidad y herramientas
[![Biome](https://img.shields.io/badge/Biome-2.5-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-5-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Husky](https://img.shields.io/badge/Husky-9-4B32E3?logo=husky&logoColor=white)](https://typicode.github.io/husky/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![K6](https://img.shields.io/badge/K6-22B14E?logo=k6&logoColor=white)](https://k6.io/)

## Índice

- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Instalación rápida](#instalación-rápida)
- [Configuración de entorno](#configuración-de-entorno)
- [Ejecución local](#ejecución-local)
- [Comandos desde la raíz](#comandos-desde-la-raíz)
- [Documentación por módulo](#documentación-por-módulo)
- [Comandos útiles](#comandos-útiles)
- [Calidad y continuous integration](#calidad-y-continuous-integration)
- [Credenciales demo](#credenciales-demo)
- [Documentación adicional](#documentación-adicional)
- [Asistencia de IA](#asistencia-de-ia)
- [Changelog](#changelog)
- [MCP de diseño frontend](#mcp-de-diseño-frontend)

## Estructura del proyecto

```text
arsfuturo/
├── .github/                    # plantillas de issues y PR, instrucciones de Copilot, workflow de calidad
│   ├── copilot-instructions.md
│   └── workflows/quality.yml
├── .husky/                     # hook pre-commit (pnpm precommit)
├── .vscode/                    # registro del servidor MCP para VS Code
├── backend/                    # API REST con Express 5 + Prisma + PostgreSQL
│   ├── k6/                     # pruebas de carga y humo con K6
│   ├── prisma/                 # schema, migraciones y seed
│   ├── src/                    # código de la API (rutas, controladores, servicios, middleware)
│   ├── tests/                  # pruebas automatizadas con Vitest
│   ├── sql/                    # scripts SQL heredados: no usar sobre una base administrada por Prisma
│   ├── AGENTS.md               # guía de agentes del backend
│   └── README.md               # documentación del backend
├── docs/                       # diagramas UML, plan SQA y configuración de ESLint
│   ├── DIAGRAMAS_UML.md
│   ├── ESLINT_SETUP.md
│   └── SQA.md
├── FrontEnd/                   # cliente React 19 + Vite 8 + Tailwind CSS 4
│   ├── src/
│   │   ├── api/                # cliente HTTP y adaptadores de datos
│   │   ├── components/         # componentes de interfaz y shell de navegación
│   │   ├── lib/                # utilidades de formato y exportación
│   │   ├── App.tsx             # shell principal de la aplicación
│   │   └── main.tsx            # punto de entrada
│   ├── AGENTS.md               # guía de agentes del FrontEnd
│   └── README.md               # documentación del frontend
├── mcp/frontend-design/        # servidor MCP local de solo lectura para agentes
├── scripts/                    # utilitarios de la raíz (dev:all, changelog)
├── AGENTS.md                   # guía de agentes del repositorio
├── ARCHITECTURE.md             # arquitectura y dirección técnica
├── CHANGELOG.md                # historial de cambios generado por commits
├── CODING_CONVENTIONS.md       # convenciones de código
├── DESIGN.md                   # guía de diseño del FrontEnd
├── GUION_PRESENTACION.md       # guía de presentación
├── README.md                   # este archivo
├── RULES.md                    # reglas obligatorias del proyecto
└── package.json                # scripts y hooks de la raíz
```

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

- Node.js 20.19+ o 22.12+ (Vite 8 y Prisma 7 lo requieren); la CI usa Node 24
- pnpm 10 (se activa con `corepack enable`)
- PostgreSQL 14+
- Git
- K6 (solo si vas a ejecutar pruebas de carga)
- VS Code (opcional, para registrar el servidor MCP automáticamente)

## Instalación rápida

### 1) Clonar el repositorio

```bash
git clone https://github.com/kleibergpm/arsfuturo.git
cd arsfuturo
```

### 2) Habilitar pnpm

```bash
corepack enable
```

### 3) Instalar las dependencias de ambos paquetes

```bash
pnpm run install:all
```

El script instala `backend/` y `FrontEnd/` y genera el cliente de Prisma. Si prefieres hacerlo por separado:

```bash
cd backend
pnpm install
cd ../FrontEnd
pnpm install
```

### 4) Copiar variables de entorno

En `backend/`:

```bash
cp .env.example .env
```

En PowerShell:

```powershell
Copy-Item .env.example .env
```

En `FrontEnd/`:

```bash
cp .env.example .env
```

### 5) Crear la base de datos PostgreSQL

Asegúrate de tener PostgreSQL 14 o superior y una base llamada `ars_futuro`:

```bash
createdb ars_futuro
```

### 6) Configurar el archivo `.env` del backend

Ejemplo:

```env
PORT=4000
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro?schema=public"
SHADOW_DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro_shadow?schema=public"
JWT_SECRET="una-clave-larga-y-privada"
CORS_ORIGIN="http://localhost:5173"
```

`SHADOW_DATABASE_URL` es opcional: solo se necesita para `prisma migrate dev`.

## Configuración de entorno

### Backend

El archivo `.env.example` se encuentra en la carpeta backend y ya incluye las variables principales:

```env
PORT=4000
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro?schema=public"
SHADOW_DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/ars_futuro_shadow?schema=public"
JWT_SECRET="cambia-esta-clave-por-una-aleatoria-y-segura"
CORS_ORIGIN="http://localhost:5173"
```

| Variable              | Obligatoria | Descripción                                              |
| --------------------- | :---------: | -------------------------------------------------------- |
| `PORT`                |      —      | Puerto de la API (4000 por defecto)                       |
| `DATABASE_URL`        |      ✅     | Conexión a PostgreSQL                                     |
| `SHADOW_DATABASE_URL` |      —      | Base shadow para `prisma migrate dev`                     |
| `JWT_SECRET`          |      ✅     | Clave para firmar los tokens JWT                          |
| `CORS_ORIGIN`         |      —      | Origen permitido por CORS                                 |

### Frontend

En la carpeta `FrontEnd` se configura un `.env` con:

```env
VITE_API_URL=http://localhost:4000/api
```

Si no se define, el cliente usa `http://localhost:4000/api`.

## Ejecución local

### Backend

```bash
cd backend
pnpm run prisma:generate
pnpm exec prisma migrate deploy
pnpm run prisma:seed
pnpm run dev
```

`prisma migrate deploy` aplica las migraciones de `prisma/migrations/`. Si prefieres sincronizar el schema directamente sin migraciones, usa `pnpm exec prisma db push`.

> No ejecutes `backend/sql/init-postgresql.sql` ni `backend/sql/seed-postgresql.sql` sobre una base administrada por Prisma: esos scripts usan un esquema en español que quedó obsoleto y provoca errores `P2022 ColumnNotFound` en la API.

La API queda disponible en:

- `http://localhost:4000`
- `http://localhost:4000/health`
- `http://localhost:4000/api/docs`

### Frontend

```bash
cd FrontEnd
pnpm run dev
```

La app queda disponible en:

- `http://localhost:5173`

### Backend y FrontEnd al mismo tiempo

Después de completar la configuración de PostgreSQL y `.env`, puedes iniciar ambos procesos desde la raíz:

```bash
pnpm run dev:all
```

El backend estará en `http://localhost:4000` y Vite en `http://localhost:5173`. Detén ambos procesos con `Ctrl+C`.

## Comandos desde la raíz

| Comando                        | Descripción                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `pnpm run install:all`         | Instala `backend/`, `FrontEnd/` y genera el cliente de Prisma      |
| `pnpm run dev:all`             | Levanta la API y el cliente Vite en una sola terminal               |
| `pnpm run check`               | Ejecuta Biome en `backend/` y `FrontEnd/`                            |
| `pnpm run typecheck`           | Verifica los tipos de TypeScript en ambos paquetes                   |
| `pnpm run precommit`           | Atajo de `check` + `typecheck`, usado por el hook `.husky/pre-commit` |
| `pnpm run changelog`           | Regenera `CHANGELOG.md` a partir de los commits                      |
| `pnpm run mcp:frontend-design` | Ejecuta el servidor MCP de diseño del FrontEnd                       |

## Documentación por módulo

- [Backend README](backend/README.md)
- [Frontend README](FrontEnd/README.md)
- [K6 README](backend/k6/README.md)
- [MCP de diseño frontend](mcp/frontend-design/README.md)
- [Diagramas UML](docs/DIAGRAMAS_UML.md)
- [Guion de presentación](GUION_PRESENTACION.md)

## Comandos útiles

### Backend

```bash
cd backend
pnpm run dev              # desarrollo con recarga automática
pnpm run start            # inicia la API sin watch
pnpm run typecheck
pnpm test
pnpm run check
pnpm run prisma:generate
pnpm run prisma:seed
pnpm run prisma:migrate   # crea una migración nueva (requiere SHADOW_DATABASE_URL)
```

### Frontend

```bash
cd FrontEnd
pnpm run dev
pnpm run typecheck
pnpm run check
pnpm run build
pnpm run preview
```

### K6

```bash
cd backend
k6 run k6/auth-smoke.js
k6 run k6/crud-endpoints.js
k6 run k6/business-endpoints.js
```

## Calidad y continuous integration

- **Biome** es el único formateador y linter del repositorio, configurado por separado en `backend/biome.json` y `FrontEnd/biome.json` (tabulaciones, comillas dobles, reglas recomendadas).
- **Husky** ejecuta `.husky/pre-commit`, que lanza `pnpm run precommit` (Biome + typecheck) antes de cada commit.
- **GitHub Actions** ejecuta `.github/workflows/quality.yml` en cada pull request hacia `main`: instala dependencias, genera el cliente de Prisma y corre Biome, typecheck, pruebas del backend y build del FrontEnd.

Antes de abrir un PR verifica localmente:

```bash
pnpm run check
pnpm run typecheck
cd backend && pnpm test
```

## Credenciales demo

El seed de `backend/prisma/seed.ts` crea usuarios de prueba por defecto:

| Usuario      | Contraseña   | Rol            |
| ------------ | ------------ | -------------- |
| `admin`      | `admin123`   | ADMINISTRATOR  |
| `admin2`     | `admin456`   | ADMINISTRATOR  |
| `agente`     | `agente123`  | AGENT          |
| `agente2`    | `agente456`  | AGENT          |
| `agente3`    | `agente789`  | AGENT          |
| `supervisor` | `super123`   | SUPERVISOR     |
| `supervisor2`| `super456`   | SUPERVISOR     |

> Recomendación: cambialos antes de usar el sistema fuera del entorno local de desarrollo.

## Documentación adicional

| Documento                                        | Contenido                                              |
| ------------------------------------------------ | ------------------------------------------------------ |
| [AGENTS.md](AGENTS.md)                            | Guía de agentes del repositorio                         |
| [ARCHITECTURE.md](ARCHITECTURE.md)                | Arquitectura, seguridad y dirección para IA            |
| [DESIGN.md](DESIGN.md)                            | Guía de diseño del FrontEnd                             |
| [RULES.md](RULES.md)                              | Reglas obligatorias del proyecto                        |
| [CODING_CONVENTIONS.md](CODING_CONVENTIONS.md)    | Convenciones de código                                  |
| [CHANGELOG.md](CHANGELOG.md)                      | Historial de cambios                                    |
| [GUION_PRESENTACION.md](GUION_PRESENTACION.md)    | Guion de presentación                                   |
| [docs/DIAGRAMAS_UML.md](docs/DIAGRAMAS_UML.md)    | Diagramas UML                                           |
| [docs/SQA.md](docs/SQA.md)                        | Plan de aseguramiento de la calidad                     |
| [docs/ESLINT_SETUP.md](docs/ESLINT_SETUP.md)      | Configuración de ESLint                                 |
| [backend/AGENTS.md](backend/AGENTS.md)            | Guía de agentes del backend                             |
| [backend/tests/AGENTS.md](backend/tests/AGENTS.md)| Guía de agentes para pruebas                            |
| [FrontEnd/AGENTS.md](FrontEnd/AGENTS.md)          | Guía de agentes del FrontEnd                            |
| [.github/copilot-instructions.md](.github/copilot-instructions.md) | Instrucciones para GitHub Copilot        |

## Asistencia de IA

Las guías para asistentes de IA están distribuidas por capas: `AGENTS.md` en la raíz, `backend/`, `backend/tests/` y `FrontEnd/`, más `RULES.md`, `CODING_CONVENTIONS.md`, `DESIGN.md` y `.github/copilot-instructions.md`.

Reglas que aplica todo el proyecto:

- Usa exclusivamente `pnpm`; el repositorio no es un workspace raíz.
- La IA se integra detrás del backend: nunca expongas claves de proveedores en `FrontEnd/`.
- Todo endpoint de IA reutiliza `authenticate`, `allow` y `validate`.
- Las decisiones sobre autorizaciones, reclamos o pagos requieren aprobación humana.
- Registra usuario, propósito, entrada resumida, proveedor, modelo, prompt, resultado y revisión humana.
- Usa adaptadores de proveedor para no acoplar la lógica de negocio a un SDK específico.

## Changelog

El historial de cambios se mantiene en [CHANGELOG.md](CHANGELOG.md) y se genera a partir de los commits del repositorio.

Para instalar changelog y ejecutar el comando de regenerarlo
```bash
pnpm i changelog
```

Para regenerarlo:

```bash
pnpm run changelog
```

Usa mensajes de commit con formato Conventional Commits para que el agrupamiento sea útil:

```text
feat: agrega búsqueda de afiliados
fix(backend): corrige validación de autorizaciones
docs: actualiza la arquitectura
```

## MCP de diseño frontend

El proyecto incluye un servidor MCP local en `mcp/frontend-design/` para que los agentes de IA consulten las reglas de diseño, arquitectura y convenciones del frontend.

Instala sus dependencias y ejecútalo manualmente con:

```bash
corepack pnpm -C mcp/frontend-design install
corepack pnpm run mcp:frontend-design
```

VS Code lo registra automáticamente mediante [.vscode/mcp.json](.vscode/mcp.json). Sus herramientas son de solo lectura y no llaman a proveedores externos. Consulta la [guía del MCP](mcp/frontend-design/README.md) para conocer sus límites.
