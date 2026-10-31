# Convenciones de código

Estas convenciones aplican a todo ARS Futuro. Las guías `AGENTS.md` de cada directorio pueden añadir reglas más específicas.

## Principios generales

- Mantén los cambios pequeños, enfocados y fáciles de revisar.
- Respeta la arquitectura existente antes de crear nuevas abstracciones.
- Usa nombres descriptivos; evita variables de una sola letra salvo índices muy locales.
- Prefiere funciones pequeñas con una responsabilidad clara.
- No mezcles refactorizaciones no relacionadas con el cambio solicitado.
- No ocultes errores con `catch` vacíos, casts innecesarios o valores por defecto silenciosos.
- Documenta decisiones no obvias, no el funcionamiento literal de cada línea.

## TypeScript y JavaScript

- Usa TypeScript en backend y frontend.
- Conserva ESM y los imports locales con extensión `.js` en el backend.
- Prefiere `const`; usa `let` solo cuando exista reasignación.
- Define tipos de entrada y salida en fronteras de módulos y API.
- Evita `any`; si es inevitable, limita su alcance y documenta la razón.
- Valida datos externos antes de usarlos.
- No uses conversiones de tipo para ocultar incompatibilidades reales.

## Formato y calidad

- Usa Biome como formateador y linter.
- Conserva tabulaciones, comillas dobles y organización automática de imports.
- Backend: `pnpm exec biome check src tests prisma`.
- FrontEnd: `pnpm exec biome check src`.
- Ejecuta el formatter solo sobre los archivos relacionados con el cambio cuando sea posible.
- Revisa el diff después de aplicar correcciones automáticas.

## Backend

- Mantén las rutas del API bajo `/api` y documenta los endpoints nuevos en Swagger.
- Valida cuerpos, parámetros y consultas con Zod.
- Protege rutas con `authenticate` y limita roles con `allow`.
- Coloca reglas de negocio en controladores o servicios, nunca solo en React.
- Usa Prisma como frontera de persistencia y respeta las relaciones del schema.
- Prefiere endpoints de negocio explícitos para transiciones como aprobar, rechazar, pagar o suspender.
- No registres tokens, contraseñas, datos de salud ni payloads sensibles completos.
- Devuelve errores consistentes a través del middleware existente.

## FrontEnd

- Centraliza las peticiones en `FrontEnd/src/api/client.ts`.
- Mantén los adaptadores de payload en `FrontEnd/src/api/adapters.ts`.
- Reutiliza componentes de `FrontEnd/src/components/ui.tsx` antes de crear otros.
- Implementa estados de carga, vacío, error y éxito para flujos asíncronos.
- No dupliques reglas de permisos o cálculos críticos del backend.
- Usa los iconos y estilos existentes antes de introducir dependencias nuevas.
- Aplica la escala responsive del tema: estilo base sin prefijo, `mobile-m:` desde 430 px y `mobile-l:` desde 768 px. No agregues breakpoints nuevos ni media queries manuales.
- No guardes secretos, claves de proveedores ni datos sensibles en variables públicas de Vite.
- Usa los tokens de color de `FrontEnd/src/index.css` en lugar de literales. Cada tema define su propia escala en `:root` y en `[data-theme="oscuro"]`; los estados mantienen su color semántico en ambos.

## Pruebas

- Escribe pruebas para comportamiento observable y reglas del dominio.
- Cubre casos exitosos, entradas inválidas, autenticación, roles y errores relevantes.
- Mantén las pruebas independientes y deterministas.
- Usa mocks para proveedores externos y evita llamadas reales en la suite normal.
- Ejecuta la prueba específica y después la suite relacionada antes de ampliar el cambio.

## Datos e IA

- Trata datos personales y de salud como información sensible.
- La IA debe integrarse detrás del backend mediante un adaptador de proveedor.
- Valida las entradas y salidas de IA con esquemas explícitos.
- Usa contexto mínimo y autorizado; no envíes el modelo completo sin necesidad.
- Registra auditoría sin guardar secretos ni datos sensibles innecesarios.
- Mantén revisión humana para decisiones sobre autorizaciones, reclamos, pagos y pólizas.

## Commits y documentación

Usa Conventional Commits para que el changelog automático pueda agrupar cambios:

```text
feat: agrega búsqueda de afiliados
fix(backend): corrige permisos de autorizaciones
docs: actualiza la arquitectura
test: cubre rechazo de reclamos
```

Actualiza la documentación cuando cambien comandos, variables de entorno, endpoints, estructura o decisiones arquitectónicas.
