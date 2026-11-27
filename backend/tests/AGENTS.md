# Guía de agentes para pruebas

Esta guía aplica a `backend/tests/`. También se aplican las instrucciones de [../AGENTS.md](../AGENTS.md) y [../../AGENTS.md](../../AGENTS.md).

## Propósito

Las pruebas verifican el comportamiento observable de la API, sus reglas de acceso y sus casos de negocio. Deben proteger contratos importantes sin acoplarse innecesariamente a detalles internos de implementación.

## Herramientas y comandos

Las pruebas usan Vitest y, cuando corresponde, Supertest:

```bash
pnpm test
pnpm exec vitest run tests/auth.test.ts
pnpm exec vitest --watch
```

Ejecuta los comandos desde `backend/`. Antes de entregar cambios, comprueba también:

```bash
pnpm run typecheck
pnpm run check
```

## Convenciones

- Escribe las pruebas en TypeScript y usa imports ESM con extensión `.js` cuando importes módulos locales.
- Usa nombres descriptivos en español o inglés consistente con el módulo probado.
- Organiza los casos con `describe` por módulo o regla y `it` por comportamiento.
- Prueba comportamiento y resultados, no la implementación privada de un controlador.
- Mantén cada prueba independiente y evita depender del orden de ejecución.
- No uses credenciales reales, tokens reales ni datos personales reales.
- Cuando uses mocks, restáuralos al terminar cada caso para evitar contaminación entre pruebas.

## Cobertura mínima por endpoint

Para cada endpoint nuevo o modificado, considera:

1. Caso exitoso con datos válidos.
2. Solicitud sin autenticación cuando la ruta es protegida.
3. Rol no autorizado.
4. Payload inválido o parámetros ausentes.
5. Recurso inexistente.
6. Error de persistencia o dependencia externa cuando sea relevante.
7. Respuesta y código HTTP esperados.

## Reglas de dominio

Las pruebas deben cubrir en el backend las decisiones sensibles, aunque el frontend también las valide:

- Permisos por `ADMINISTRATOR`, `AGENT` y `SUPERVISOR`.
- Aprobación y rechazo de autorizaciones y reclamos.
- Cálculo de copagos, facturas y pagos.
- Relaciones entre afiliados, planes, pólizas y proveedores.
- Transiciones válidas de estados.

## Pruebas de IA

Para cualquier módulo de IA, empieza con un proveedor mock y respuestas deterministas. Cubre como mínimo:

- Autenticación y autorización antes de construir el contexto.
- Exclusión de campos sensibles o no permitidos.
- Validación Zod de respuestas estructuradas del modelo.
- Timeout, error del proveedor, fallback y límites de reintentos.
- Auditoría de usuario, propósito, modelo y resultado sin secretos.
- Confirmación humana para acciones de impacto.
- Rechazo de instrucciones del modelo que intenten saltarse permisos o reglas del dominio.

No hagas pruebas que llamen a un proveedor externo real durante la suite normal. Esas pruebas deben ser explícitas, aisladas y configuradas fuera de CI por defecto.

## Datos y base de datos

- Prefiere fixtures pequeños y legibles.
- Limpia los datos creados por una prueba o usa una base de prueba aislada.
- No ejecutes `prisma db push` ni scripts destructivos desde una prueba automatizada.
- Si cambia `prisma/schema.prisma`, regenera el cliente con `pnpm run prisma:generate` antes de probar.

## Antes de entregar

Verifica la prueba específica, la suite completa y los tipos:

```bash
pnpm exec vitest run tests/auth.test.ts
pnpm test
pnpm run typecheck
```
