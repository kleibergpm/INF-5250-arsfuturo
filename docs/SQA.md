# Plan de Aseguramiento de la Calidad del Software (SQA)
**Proyecto:** ARS Futuro  
**Entregable II — Actividad 2 (E2-A2)**  
**Grupo 4 - The Code Society:**  
* Anderson Antonio Castillo Peláez (100631535)
* Kleiber Gabriel Perez Montero (100453725)
* Eric Vladimir Tejada Nieve (FF1944)
* Mayobanex Vicente Soto (100417556)  
**Universidad Autónoma de Santo Domingo (UASD)** — Facultad de Ciencias – Escuela de Informática  
**INF-5250** · Ingeniería de Software II

---

## Contexto del proyecto
**ARS Futuro** es el sistema desarrollado por el equipo 4 para apoyar la gestión de una Administradora de Riesgos de Salud (ARS): registro de afiliados, gestión de autorizaciones y reclamaciones de servicios médicos, y consulta del estado de coberturas. El sistema maneja datos personales y de salud de los afiliados, así como información financiera asociada a reclamaciones, por lo que la confidencialidad e integridad de los datos son especialmente sensibles.

* **Repositorio GitHub:** [kleibergpm/INF-5250-arsfuturo](https://github.com/kleibergpm/INF-5250-arsfuturo)
* **Commit/tag de referencia (E2-A1):** `Release Version 1.1.0 - v0.1-E2-A1`
* **Stack evaluado:**
  * **Backend:** Node.js + Express + TypeScript + Prisma + PostgreSQL
  * **Frontend:** React + Vite + Tailwind CSS
* **Herramientas del análisis histórico E2-A2:**
  * *Backend:* ESLint + typescript-eslint, eslint-plugin-security, eslint-plugin-sonarjs
  * *Frontend:* ESLint + typescript-eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y

El checklist y sus hallazgos conservan la evidencia de ese entregable. La verificación vigente usa Biome, TypeScript y los [checks del README](../README.md#checks-y-contribuciones).

---

## 1. Propósito y alcance
Este Plan de SQA establece el conjunto de actividades planificadas y sistemáticas mediante las cuales el equipo de ARS Futuro garantiza que tanto el proceso de desarrollo como el producto de software resultante cumplen con los estándares de calidad establecidos. A diferencia del Control de Calidad (QC), que verifica el producto ya construido, este plan se enfoca en el proceso: define reglas, roles, herramientas y checklists que se aplican antes y durante el desarrollo, con el objetivo de prevenir defectos.

* **Alcance:** Módulo de Afiliados y Autorizaciones del sistema ARS Futuro, enfocado en la funcionalidad de CRUD.

---

## 2. Organización y responsable de calidad
El equipo designa a **Kleiber Perez** como Responsable de Calidad (SQA Lead) para el presente entregable.

### 2.1 Funciones del responsable de calidad
* Coordinar la aplicación del checklist de calidad sobre la(s) funcionalidad(es) seleccionada(s).
* Crear y dar seguimiento a los tickets de Jira correspondientes a cada hallazgo detectado, asignándoles severidad y responsable.
* Verificar que los Pull Requests en GitHub incluyan evidencia del análisis estático y checklist completado antes del merge.
* Consolidar y presentar un resumen cuantitativo de hallazgos abiertos/cerrados antes de cada entrega.
* Revisar el informe final del entregable antes de su envío.

### 2.2 Roles del equipo relacionados con calidad
| Rol | Responsable | Herramienta principal |
| :--- | :--- | :--- |
| **Responsable de calidad (SQA Lead)** | Kleiber Perez | Jira (seguimiento) / GitHub (PR) |
| **Desarrollador(a) de la funcionalidad** | Anderson Castillo | GitHub (rama feature, PR) / Jira |
| **Revisor(a) de Pull Requests** | Mayobanex Vicente | GitHub |
| **Moderador de revisión técnica formal** | Eric Tejeda | Acta de inspección / Jira |

---

## 3. Atributo(s) de calidad priorizado(s)
* **Atributo primario — Seguridad:** Se prioriza Seguridad dada la naturaleza del sistema (datos de salud y financieros). Hallazgos confirmados: (1) cabecera `X-Powered-By` expuesta por Express (`sonarjs/x-powered-by`), y (2) acceso dinámico a objeto (`security/detect-object-injection`) en variables de entorno. Prisma parametriza consultas por defecto, por lo que la inyección SQL clásica no está confirmada.
* **Atributo secundario — Usabilidad (Accesibilidad):** El análisis estático del frontend arrojó hallazgos considerables de accesibilidad: 30+ ocurrencias de `jsx-a11y/label-has-associated-control` y 2 ocurrencias de elementos interactivos no operables por teclado.

| Subcaracterística (ISO/IEC 25010) | Qué evalúa | Relación con hallazgos de ARSFuturo |
| :--- | :--- | :--- |
| **Confidencialidad** | Datos accesibles solo a usuarios autorizados | Validado uso de endpoints con `arsfuturo_token`. |
| **Integridad** | Prevención de modificaciones no autorizadas | Uso de Prisma previene consultas con concatenación SQL. |
| **Divulgación de información** | No revelar detalles técnicos innecesarios | Express expone cabecera `X-Powered-By` por defecto. |
| **Usabilidad / Accesibilidad** | Operable por todos los usuarios (lectores de pantalla) | 30+ campos sin label asociado y 2 elementos no operables por teclado. |

---

## 4. Criterios de calidad
1. Toda consulta a base de datos debe realizarse mediante el cliente de Prisma (parametrizado); prohibida la interpolación directa en `$queryRaw`.
2. Ninguna credencial (`JWT_SECRET`, `DATABASE_URL`) puede residir en el código fuente; exclusivamente en variables de entorno (`.env`).
3. El header `X-Powered-By` debe deshabilitarse explícitamente (`app.disable('x-powered-by')`).
4. Todo campo de formulario (`<input>`, `<select>`, `<textarea>`) debe tener un `<label>` asociado vía `htmlFor/id` o `aria-label`.
5. Todo elemento con `onClick` en no-interactivos debe soportar teclado (`onKeyDown`) o implementarse como `<button>`.
6. Los hooks (`useEffect`, etc.) deben declarar su arreglo de dependencias completo y exacto.
7. Todo hallazgo Alto o Crítico del análisis estático debe registrarse como ticket de Jira.

---

## 5. Actividades de aseguramiento
* **Análisis estático:** Antes de cada PR y entregable, ejecuta `pnpm run check` y `pnpm run typecheck`.
* **Revisión de código entre pares:** En cada PR de GitHub (mínimo 1 aprobación).
* **Aplicación de checklist de calidad:** Sobre cada funcionalidad nueva o crítica.
* **Revisión técnica formal cruzada:** Una vez por entregable con componente de verificación.
* **Registro y seguimiento:** Continuo mediante tickets en Jira (Componente/Epic “SQA”).
* **Trazabilidad GitHub–Jira:** Los commits/PRs deben referenciar el ticket (ej. `ARSFUT-123`).

---

## 6. Checklist de calidad

### A. Backend — Seguridad (Express + Prisma)
| N.º | Criterio de revisión | Cumple | Observación |
| :---: | :--- | :---: | :--- |
| 1 | Header `X-Powered-By` de Express deshabilitado. | **No** | Confirmado por ESLint en `src/app.ts:4`. |
| 2 | No existen accesos dinámicos a objetos con índices no controlados. | **Parcial** | Advertencia en `src/config/env.ts:4`; requiere revisión manual. |
| 3 | Script de seed no deja variables de hash sin usar. | **Parcial** | `prisma/seed.ts:10` declara `hash` sin usar. |
| 4 | `JWT_SECRET` y credenciales solo en variables de entorno. | **Pendiente** | Requiere revisión manual (grep). |
| 5 | Consultas usan cliente de Prisma sin interpolación directa. | **Sí (con reserva)** | No se detectaron `$queryRawUnsafe`. |

### B. Frontend — Accesibilidad y Usabilidad (React + TypeScript)
| N.º | Criterio de revisión | Cumple | Observación |
| :---: | :--- | :---: | :--- |
| 1 | Todos los campos de formulario tienen `<label>` asociado. | **No** | 30+ ocurrencias de `jsx-a11y/label-has-associated-control` en `App.tsx`. |
| 2 | Elementos con manejadores de clic operables por teclado. | **No** | 2 ocurrencias en `src/components/ui.tsx:45`. |
| 3 | Hooks (`useEffect`/useMemo) declaran dependencias correctamente. | **Parcial** | 3 advertencias en `App.tsx` (líneas 142, 183, 1515). |
| 4 | No existen imports o variables declaradas y no utilizadas. | **No** | 8 ocurrencias en `App.tsx`, `api/client.ts`. |

---

## 7. Aplicación del checklist sobre una funcionalidad concreta
**Funcionalidad:** Gestión de Afiliados y Autorizaciones (`App.tsx` y rutas/middlewares del backend).

| N.º | Hallazgo | Categoría | Severidad | Ubicación | Recomendación |
| :---: | :--- | :--- | :--- | :--- | :--- |
| 1 | Express expone header `X-Powered-By` | Vulnerabilidad | Alta | `backend/src/app.ts:4` | Agregar `app.disable('x-powered-by')` |
| 2 | Variable 'hash' de contraseña no utilizada en seed | Vulnerabilidad | Alta | `backend/prisma/seed.ts:10` | Verificar asignación al password del usuario demo |
| 3 | Acceso dinámico a objeto con índice no controlado | Vulnerabilidad | Baja | `backend/src/config/env.ts:4` | Revisar origen del índice o descartar falso positivo |
| 4 | 30+ campos de formulario sin `<label>` asociado | Usabilidad/Accesibilidad | Baja | `frontend/src/App.tsx` | Asociar con `htmlFor/id` o `aria-label` |
| 5 | Elementos interactivos no operables por teclado | Usabilidad/Accesibilidad | Major | `frontend/src/components/ui.tsx:45` | Reemplazar por `<button>` o agregar `role`/`tabIndex` |
| 6 | Dependencias incompletas en `useEffect`/`useMemo` | Bug potencial | Minor | `frontend/src/App.tsx` (142, 183, 1515) | Ajustar dependencias según linter |
| 7 | Variables e imports no usados (8 ocurrencias) | Code Smell | Minor | `frontend/src/App.tsx`, `api/client.ts` | Eliminar declaraciones no utilizadas |
| 8 | Uso de `console.log`/`console.warn` en producción | Code Smell | Minor | Archivos backend principales | Sustituir por logger configurable |

---

## 8. Gestión de hallazgos
* **Registro:** Creación como Issue en GitHub y/o ticket en Jira (Epic “SQA”).
* **Clasificación:** Mapeo de severidad (Critical → Highest, Major → High, Minor → Medium, Info → Low).
* **Priorización:** Se corrigen primero Vulnerabilidades (1 y 2), luego Accesibilidad (4 y 5), y finalmente Code Smells.
* **Asignación:** Asignado a un integrante distinto del autor del hallazgo.
* **Trazabilidad:** Commits y PRs referencian el ticket de Jira (ej. `ARSFUT-123`).
* **Cierre y Reporte:** Verificación en PR por un tercero y exportación del tablero antes de entrega.

---

## 9. Interpretación de resultados
El análisis estático real muestra que el mayor riesgo de seguridad no es la inyección SQL (mitigada por Prisma), sino la exposición de contraseñas sin hashear en el seed y la divulgación del framework (`X-Powered-By`). En el frontend, el volumen alto de problemas de accesibilidad (30+ formularios sin label) representa un riesgo para afiliados con discapacidad visual o motora, alineándose con el sentido social de una ARS. El análisis automatizado detecta patrones sintácticos eficientemente, pero requiere inspección humana para reglas de negocio y roles.

---

## 10. Conclusiones y próximos pasos
| Hallazgo | Prioridad | Responsable sugerido | Fecha objetivo |
| :--- | :--- | :--- | :--- |
| 1. Deshabilitar `X-Powered-By` en Express | Alta (antes de E3) | Anderson Castillo | 20/09/2026 |
| 2. Verificar/corregir hash de contraseña en `seed.ts` | Alta (antes de E3) | Anderson Castillo | 20/09/2026 |
| 4. Asociar labels a controles de formulario (30+) | Alta (antes de E3) | Eric Tejeda | 18/09/2026 |
| 5. Hacer operables por teclado elementos de `ui.tsx` | Media | Kleiber Perez | 21/09/2026 |
| 6. Corregir dependencias de `useEffect`/`useMemo` | Media | Mayobanex Vicente | 20/09/2026 |
| 7-8. Limpiar variables no usadas y `console.log` | Baja | Rotativo (`lint:fix`) | Antes de cada PR |

---

## 11. Referencias y Bibliografía
* Norma ISO/IEC 25010 — Modelo de calidad del producto de software (SQuaRE).
* Programa de la asignatura INF-5250, Ingeniería de Software II — guía de entregables.
* Sommerville, I. — *Ingeniería del Software*, 7ma ed.
* Braude, E. & Bernstein, L. — *Software Engineering: Modern Approaches*.
* SWEBOK (Software Engineering Body of Knowledge) — área de Software Quality.
* Repositorio GitHub y tablero Jira del proyecto.
