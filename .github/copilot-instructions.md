# Instrucciones de Copilot para ARS Futuro

El proyecto incluye un servidor MCP local para diseño frontend en `mcp/frontend-design/`.

- Configuración de VS Code: `.vscode/mcp.json`.
- Ejecución manual: `corepack pnpm -C mcp/frontend-design start`.
- Herramientas disponibles: `get_design_guidelines`, `get_project_context` y `review_frontend_proposal`.
- El servidor es de solo lectura y no recibe claves de proveedores ni datos de la base de datos.
- Consulta [DESIGN.md](../DESIGN.md), [ARCHITECTURE.md](../ARCHITECTURE.md) y [RULES.md](../RULES.md) antes de proponer cambios de UI.

Referencias oficiales:

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Documentación del SDK](https://ts.sdk.modelcontextprotocol.io/v2/)
- [Especificación MCP](https://modelcontextprotocol.io/specification/latest)
