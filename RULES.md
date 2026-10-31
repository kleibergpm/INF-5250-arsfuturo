# Reglas del proyecto

Estas reglas son obligatorias para agentes de IA y colaboradores que modifiquen ARS Futuro. En caso de conflicto, prevalecen las instrucciones más específicas del directorio y las indicaciones directas del usuario.

## Reglas obligatorias

1. Usa exclusivamente `pnpm`; no ejecutes `npm` ni `npx`.
2. No actualices `package-lock.json` ni crees otro lockfile.
3. Trabaja desde `backend/` o `FrontEnd/` para comandos de cada paquete.
4. Lee las instrucciones `AGENTS.md` aplicables antes de modificar código.
5. Conserva cambios del usuario y no reviertas archivos ajenos a la tarea.
6. No hagas commits, resets ni crees ramas salvo que el usuario lo solicite explícitamente.
7. No introduzcas dependencias nuevas si la funcionalidad puede resolverse con las herramientas existentes.
8. No expongas secretos, credenciales, tokens o datos personales en código, logs, documentación o frontend.
9. No desplaces reglas de negocio, permisos o validaciones críticas al cliente.
10. No llames proveedores de IA directamente desde React.

## Antes de editar

- Identifica el archivo, símbolo, prueba o comando que controla el comportamiento.
- Formula una hipótesis concreta sobre el cambio necesario.
- Revisa las convenciones del directorio afectado.
- Comprueba si existen cambios sin confirmar en los archivos que tocarás.
- Elige la comprobación más barata que pueda demostrar si el cambio funciona.

## Durante la edición

- Realiza el cambio mínimo que resuelva la solicitud.
- Usa los patrones y componentes existentes.
- Mantén interfaces públicas y nombres de payload salvo que el cambio los requiera.
- Usa validación estructurada para datos externos.
- Añade pruebas cuando cambie comportamiento, permisos, persistencia o integración.
- Actualiza documentación cuando el cambio altere el uso del sistema.

## IA y datos sensibles

- Implementa la IA en el backend, detrás de autenticación y autorización.
- Usa contexto mínimo y elimina campos que no sean necesarios.
- Valida las respuestas del modelo antes de presentarlas o persistirlas.
- Usa un proveedor mock para pruebas deterministas.
- Define timeout, fallback, límites de reintentos y límites de costo.
- La IA puede sugerir, resumir, explicar o priorizar; no puede aprobar, rechazar, pagar o suspender sin revisión humana.
- Registra auditoría de usuario, propósito, modelo, versión de prompt y resultado sin almacenar secretos innecesarios.

## Validación

Después de editar, ejecuta primero una comprobación enfocada. Según el área:

### Backend

```bash
cd backend
pnpm run typecheck
pnpm test
pnpm run check
```

### FrontEnd

```bash
cd FrontEnd
pnpm run typecheck
pnpm run check
pnpm run build
```

### Documentación o configuración

```bash
git diff --check
pnpm run changelog
```

Si una validación falla, corrige el mismo alcance y repite la comprobación antes de ampliar la investigación.

## Entrega

La respuesta final debe indicar:

- Qué archivos se modificaron.
- Qué comportamiento se implementó.
- Qué validaciones se ejecutaron y su resultado.
- Qué limitaciones o riesgos quedaron pendientes.

No afirmes que una prueba pasó si no fue ejecutada.
