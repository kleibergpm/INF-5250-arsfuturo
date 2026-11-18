# Reglas de servicios, pagos y facturación

## SCRUM-40 y SCRUM-42 · Servicios y pagos

- El registro requiere un afiliado activo y un proveedor existente. Si se indica una autorización, debe estar aprobada y corresponder al mismo afiliado y proveedor.
- Un servicio pendiente puede pagarse si el costo menos el copago es positivo y el servicio carece de un pago previo. La API calcula ese saldo con decimales y la pantalla usa el importe y la elegibilidad devueltos por la API.
- Administración registra el pago confirmado y el sistema guarda el pago, el estado del servicio y la notificación en una sola transacción. Repetir los mismos datos devuelve el pago existente. Los intentos con datos distintos o una referencia bancaria ya usada reciben conflicto.
- Los pagos rechazados existentes se conservan para revisión. Como el modelo admite un pago por servicio, un rechazo bloquea la reemisión automática. Queda pendiente acordar la conciliación y el historial de nuevos intentos. El sistema registra pagos y referencias; la operación bancaria ocurre fuera de esta API.

## SCRUM-43 · Facturas

- El período es un mes calendario UTC. Una póliza activa o en gracia genera una factura si su vigencia coincide al menos un día con el mes. Se usa la prima mensual completa. El prorrateo requiere una regla de negocio acordada.
- El vencimiento de las nuevas facturas es el día 10 del período, inclusive. Una factura pendiente se muestra atrasada desde el día 11. Las facturas existentes conservan su fecha. Regenerar agrega únicamente las pólizas elegibles que faltan y devuelve las facturas del período.
- Un recordatorio actualiza el indicador existente sin adelantar el vencimiento ni sacar una factura de gracia. Administración puede conceder gracia o suspender por una factura vencida e impaga. Suspender cierra la gracia y devuelve la factura a atrasada. La duración automática de la gracia y el envío externo de recordatorios quedan pendientes.
- Una factura pagada conserva su referencia y fecha de pago. Repetir la referencia devuelve la factura guardada; una referencia diferente devuelve conflicto. Los cambios de póliza respetan la vigencia y el estado expirado según SCRUM-41. Queda por definir cómo deben combinarse varias facturas pendientes de la misma póliza y cómo conciliar pagos de períodos pasados.
