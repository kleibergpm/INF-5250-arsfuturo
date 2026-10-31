-- Datos de demostración para ARS Futuro.
-- Ejecutar en una base nueva con el esquema actual (migraciones o init-postgresql.sql).
-- Desde backend: psql -d ars_futuro -v ON_ERROR_STOP=1 -f sql/seed-postgresql.sql
-- Elegir este seed O pnpm run prisma:seed; no ejecutar ambos sobre los mismos datos.
BEGIN;

INSERT INTO "users" ("id", "username", "name", "password_hash", "role", "updated_at") VALUES
  ('00000000-0000-4000-8000-000000000001', 'admin', 'Administrador', '$2a$12$.XAyLBDDVf5BD022zalNmOKcNthjP2ih/GfhwxMyR14DfkWQkbBmm', 'ADMINISTRATOR', CURRENT_TIMESTAMP),
  ('00000000-0000-4000-8000-000000000002', 'agente', 'Agente ARS', '$2a$12$prtpR3YzTde/tArkInKHMOry3.HjfZmhMRyr4g7qa3bHnxznlEmgC', 'AGENT', CURRENT_TIMESTAMP),
  ('00000000-0000-4000-8000-000000000003', 'supervisor', 'Supervisor', '$2a$12$uDMMAdXvTkHCgTdriWH1feiD4nN5Jsii5LUxeapsVl2R3uORYV0XG', 'SUPERVISOR', CURRENT_TIMESTAMP);


-- Cuenta demo: afiliado / afiliado123 (cedula ficticia, solo desarrollo).
INSERT INTO "users" ("id", "username", "name", "password_hash", "role", "national_id", "updated_at") VALUES
  ('00000000-0000-4000-8000-000000000004', 'afiliado', 'Afiliado demo', '$2b$12$hkvjEKJiZOWrEhq4hJ9F1eKGFtT/ETnj7TUubWG7FZC1P.UGV9GXW', 'INSURED', '00112345678', CURRENT_TIMESTAMP);

INSERT INTO "plans" ("id", "name", "consultation_copay", "coverage", "updated_at") VALUES
  ('BASICO', 'Plan Básico de Salud', 200.00, '{"consultas":true,"laboratorio":true,"emergencias":true,"hospitalizacion":true,"odontologia":false,"saludMental":false}'::jsonb, CURRENT_TIMESTAMP),
  ('PLUS', 'Plan Complementario', 100.00, '{"consultas":true,"laboratorio":true,"emergencias":true,"hospitalizacion":true,"odontologia":true,"saludMental":false}'::jsonb, CURRENT_TIMESTAMP),
  ('PREMIUM', 'Plan Premium', 50.00, '{"consultas":true,"laboratorio":true,"emergencias":true,"hospitalizacion":true,"odontologia":true,"saludMental":true}'::jsonb, CURRENT_TIMESTAMP);

INSERT INTO "providers" ("id", "name", "type", "city", "phone", "updated_at") VALUES
  ('10000000-0000-4000-8000-000000000001', 'Hospital General Plaza de la Salud', 'Hospital', 'Santo Domingo', '+1 809 555 0001', CURRENT_TIMESTAMP),
  ('10000000-0000-4000-8000-000000000002', 'CEDIMAT', 'Imagenología', 'Santo Domingo', '+1 809 555 0002', CURRENT_TIMESTAMP),
  ('10000000-0000-4000-8000-000000000003', 'Laboratorio Referencia', 'Laboratorio', 'Santo Domingo', '+1 809 555 0003', CURRENT_TIMESTAMP),
  ('10000000-0000-4000-8000-000000000004', 'HOMS', 'Hospital', 'Santiago', '+1 809 555 0004', CURRENT_TIMESTAMP);

INSERT INTO "policies" ("id", "company", "plan_id", "start_date", "end_date", "monthly_premium", "insured_count", "status", "updated_at") VALUES
  ('P-001', 'COSEVI, S.R.L.', 'PREMIUM', '2022-11-01', '2026-10-31', 185000.00, 52, 'ACTIVE', CURRENT_TIMESTAMP),
  ('P-002', 'DINAFA, S.A.', 'PLUS', '2023-01-01', '2026-12-31', 99000.00, 31, 'ACTIVE', CURRENT_TIMESTAMP),
  ('P-003', 'COMINTER, S.R.L.', 'BASICO', '2024-02-01', '2025-12-31', 48000.00, 14, 'SUSPENDED', CURRENT_TIMESTAMP);

INSERT INTO "insureds" ("id", "name", "national_id", "plan_id", "policy_id", "status", "start_date", "birth_date", "phone", "email", "dependents", "updated_at") VALUES
  ('20000000-0000-4000-8000-000000000001', 'María Gonzalo Padilla', '001-1234567-8', 'PLUS', 'P-002', 'ACTIVE', '2023-05-10', '1991-09-14', '+1 809 555 1111', 'maria.padilla@demo.do', 1, CURRENT_TIMESTAMP),
  ('20000000-0000-4000-8000-000000000002', 'Ricardo Balbuena', '001-9876543-2', 'PREMIUM', 'P-001', 'ACTIVE', '2022-11-01', '1990-03-22', '+1 829 647 1044', 'ricardo@cosevi.do', 2, CURRENT_TIMESTAMP),
  ('20000000-0000-4000-8000-000000000003', 'Juan Patiño Cáceres', '001-2345678-9', 'BASICO', 'P-003', 'ACTIVE', '2024-01-15', '1988-07-05', '+1 809 555 2222', 'juan.pc@demo.do', 0, CURRENT_TIMESTAMP),
  ('20000000-0000-4000-8000-000000000004', 'Gia Fernández', '001-7654321-0', 'PLUS', 'P-002', 'SUSPENDED', '2023-02-01', '1995-04-10', '+1 809 555 3333', 'gia@demo.do', 3, CURRENT_TIMESTAMP);

INSERT INTO "authorizations" ("id", "insured_id", "provider_id", "procedure", "copay", "status", "date", "updated_at") VALUES
  ('30000000-0000-4000-8000-000000000001', '20000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', 'Consulta general', 100.00, 'APPROVED', CURRENT_DATE, CURRENT_TIMESTAMP),
  ('30000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', '10000000-0000-4000-8000-000000000002', 'Rayos X de tórax', 50.00, 'PENDING', CURRENT_DATE, CURRENT_TIMESTAMP),
  ('30000000-0000-4000-8000-000000000003', '20000000-0000-4000-8000-000000000003', '10000000-0000-4000-8000-000000000003', 'Laboratorio completo', 200.00, 'REJECTED', CURRENT_DATE - 2, CURRENT_TIMESTAMP);

INSERT INTO "claims" ("id", "insured_id", "provider_id", "amount", "status", "date", "updated_at") VALUES
  ('40000000-0000-4000-8000-000000000001', '20000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', 1500.00, 'UNDER_REVIEW', CURRENT_DATE, CURRENT_TIMESTAMP),
  ('40000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', '10000000-0000-4000-8000-000000000004', 2800.00, 'APPROVED', CURRENT_DATE - 5, CURRENT_TIMESTAMP),
  ('40000000-0000-4000-8000-000000000003', '20000000-0000-4000-8000-000000000003', '10000000-0000-4000-8000-000000000002', 950.00, 'REJECTED', CURRENT_DATE - 10, CURRENT_TIMESTAMP);

INSERT INTO "medical_services" ("id", "insured_id", "provider_id", "authorization_id", "description", "cost", "copay", "date", "status", "updated_at") VALUES
  ('50000000-0000-4000-8000-000000000001', '20000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', '30000000-0000-4000-8000-000000000001', 'Consulta general', 1200.00, 100.00, CURRENT_DATE, 'PENDING_PAYMENT', CURRENT_TIMESTAMP),
  ('50000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000003', '10000000-0000-4000-8000-000000000003', NULL, 'Laboratorio completo', 950.00, 200.00, CURRENT_DATE - 7, 'PAID', CURRENT_TIMESTAMP);

INSERT INTO "provider_payments" ("id", "provider_id", "service_id", "bank_reference", "amount", "method", "date", "status", "updated_at") VALUES
  ('60000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000003', '50000000-0000-4000-8000-000000000002', 'ORD-2026-0001', 750.00, 'Transferencia', CURRENT_DATE - 6, 'PROCESSED', CURRENT_TIMESTAMP);

INSERT INTO "invoices" ("id", "policy_id", "period", "issued_at", "due_date", "amount", "status", "paid_at", "reference", "reminder_sent", "updated_at") VALUES
  ('70000000-0000-4000-8000-000000000001', 'P-001', '2026-08', '2026-08-01', '2026-08-10', 185000.00, 'PAID', '2026-08-08', 'PR-2026-0808-0001', FALSE, CURRENT_TIMESTAMP),
  ('70000000-0000-4000-8000-000000000002', 'P-002', '2026-09', '2026-09-01', '2026-09-10', 99000.00, 'PENDING', NULL, NULL, FALSE, CURRENT_TIMESTAMP),
  ('70000000-0000-4000-8000-000000000003', 'P-003', '2026-09', '2026-09-01', '2026-09-10', 48000.00, 'OVERDUE', NULL, NULL, TRUE, CURRENT_TIMESTAMP);

INSERT INTO "notifications" ("id", "user_id", "type", "title", "message", "read") VALUES
  ('80000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000001', 'success', 'Base de datos lista', 'Los datos de demostración fueron cargados correctamente.', FALSE),
  ('80000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-000000000003', 'info', 'Reclamo pendiente', 'Hay un reclamo pendiente de revisión.', FALSE);

COMMIT;
