# Reglas y decisiones de la fase 3

## SCRUM-39 · Afiliados

El alta usa `ACTIVE` por defecto. La API mantiene los tres estados registrados y el permiso de Administración y Agentes para crear y editar afiliados. El estado propio del afiliado sigue siendo la referencia de las comprobaciones de elegibilidad existentes.

Queda por confirmar si `INACTIVE` es definitivo, quién puede reactivar a un afiliado y si hay motivos de suspensión que deban quedar registrados.

## SCRUM-41 · Pólizas

- Administración conserva la edición de pólizas. El inicio puede coincidir con el fin y debe precederlo en los demás casos. Las ediciones parciales se validan contra la fecha almacenada.
- Facturación puede mover pólizas vigentes entre `ACTIVE`, `IN_GRACE` y `SUSPENDED` mediante pago, gracia o suspensión. El movimiento automático se omite si la póliza está marcada `EXPIRED` o si el día UTC de la operación está fuera de su vigencia. El pago de una factura se registra aunque no reactive la póliza.
- La relación con los afiliados y el estado individual de cada afiliado se conservan al cambiar el estado de la póliza.

Queda por confirmar el vencimiento automático y su zona horaria operativa, la renovación de pólizas expiradas, la elegibilidad de afiliados vinculados y el cálculo de facturas por período, incluida una vigencia parcial. Las reglas de generación, vencimiento y gracia de facturas se coordinan con SCRUM-43.

## SCRUM-44 · Proveedores

`Provider.city` cubre la localidad usada por el directorio y sus filtros actuales. Se valida como texto en el alta y la edición, sin catálogo. El modelo carece de estado operativo. Antes de incorporarlo hay que definir qué impide una baja operativa en nuevas autorizaciones, reclamos y servicios, y cómo se conserva el acceso a registros históricos.

## SCRUM-38 · Reclamaciones

Administración y Agentes registran reclamaciones, con estado inicial `UNDER_REVIEW`, y pueden editar o eliminar las que siguen en revisión. Administración y Supervisión pueden aprobarlas o rechazarlas. Los tres roles pueden consultar el listado y el detalle.

La primera decisión cierra la reclamación. Repetir la misma decisión devuelve el estado guardado sin duplicar la notificación. Una decisión distinta, editar o eliminar una reclamación cerrada devuelve conflicto. Una reapertura requeriría un flujo de revisión definido por negocio.
