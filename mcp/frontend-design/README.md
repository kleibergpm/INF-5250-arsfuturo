# MCP de diseño del FrontEnd

Servidor MCP local para dar a los agentes de IA acceso estructurado a las guías de diseño, arquitectura y reglas de ARS Futuro.

## Qué ofrece

- `get_design_guidelines`: consulta toda la guía `DESIGN.md` o una sección concreta.
- `get_project_context`: carga arquitectura, convenciones y reglas del proyecto.
- `review_frontend_proposal`: revisa una propuesta de UI contra seguridad, estados, accesibilidad, responsive, IA y reutilización de componentes.

El servidor es de solo lectura y no llama a proveedores externos ni accede a la base de datos.

## Instalación

Desde este directorio:

```bash
pnpm install
```

## Ejecución manual

```bash
pnpm start
```

El servidor usa transporte stdio y espera mensajes MCP por entrada estándar. Para uso habitual, utiliza la configuración de `.vscode/mcp.json`.

## Configuración de VS Code

La configuración del repositorio registra el servidor con el nombre `arsfuturo-frontend-design`. Después de instalar dependencias, reinicia o vuelve a cargar los servidores MCP desde VS Code.

## Límites

Este MCP no sustituye la revisión visual en navegador. Los cambios de UI todavía deben validarse con `pnpm run typecheck`, `pnpm run check`, `pnpm run build` y revisión en escritorio y móvil.
