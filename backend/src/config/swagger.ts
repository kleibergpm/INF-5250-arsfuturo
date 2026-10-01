import swaggerJsdoc from 'swagger-jsdoc';

const bearerSecurity = [{ bearerAuth: [] }];
const uuidParameter = { name: 'id', in: 'path', required: true, schema: { type: 'string', format: 'uuid' } };
const okResponse = { description: 'Operacion exitosa' };
const errorResponses = { 401: { description: 'No autenticado' }, 403: { description: 'Sin permisos suficientes' }, 422: { description: 'Datos invalidos' } };
const jsonBody = (schema: Record<string, unknown>) => ({ required: true, content: { 'application/json': { schema } } });
const objectSchema = (properties: Record<string, unknown>) => ({ type: 'object', properties });

const crudPaths = (resource: string, schema: Record<string, unknown>) => ({
  [`/api/${resource}`]: {
    get: { tags: [resource], summary: `Lista ${resource}`, security: bearerSecurity, responses: { 200: { description: `Listado de ${resource}` }, ...errorResponses } },
    post: { tags: [resource], summary: `Crea ${resource.slice(0, -1)}`, security: bearerSecurity, requestBody: jsonBody(schema), responses: { 201: okResponse, ...errorResponses } },
  },
  [`/api/${resource}/{id}`]: {
    parameters: [uuidParameter],
    get: { tags: [resource], summary: `Obtiene un elemento de ${resource}`, security: bearerSecurity, responses: { 200: okResponse, 404: { description: 'No encontrado' }, ...errorResponses } },
    patch: { tags: [resource], summary: `Actualiza un elemento de ${resource}`, security: bearerSecurity, requestBody: jsonBody(schema), responses: { 200: okResponse, 404: { description: 'No encontrado' }, ...errorResponses } },
    delete: { tags: [resource], summary: `Elimina un elemento de ${resource}`, security: bearerSecurity, responses: { 200: okResponse, 404: { description: 'No encontrado' }, ...errorResponses } },
  },
});

const resourceSchemas = {
  planes: objectSchema({ id: { type: 'string', example: 'PLAN-BASICO' }, nombre: { type: 'string' }, copagoConsulta: { type: 'number' }, cobertura: { type: 'object', additionalProperties: { type: 'boolean' } } }),
  proveedores: objectSchema({ nombre: { type: 'string' }, tipo: { type: 'string' }, ciudad: { type: 'string' }, telefono: { type: 'string' } }),
  polizas: objectSchema({ id: { type: 'string' }, empresa: { type: 'string' }, planId: { type: 'string' }, desde: { type: 'string', format: 'date' }, hasta: { type: 'string', format: 'date' }, primaMensual: { type: 'number' } }),
  afiliados: objectSchema({ nombre: { type: 'string' }, cedula: { type: 'string' }, planId: { type: 'string' }, desde: { type: 'string', format: 'date' }, correo: { type: 'string', format: 'email' } }),
  reclamos: objectSchema({ afiliadoId: { type: 'string', format: 'uuid' }, proveedorId: { type: 'string', format: 'uuid' }, monto: { type: 'number' }, fecha: { type: 'string', format: 'date' } }),
  notificaciones: objectSchema({ usuarioId: { type: 'string', format: 'uuid', nullable: true }, tipo: { type: 'string' }, titulo: { type: 'string' }, mensaje: { type: 'string' }, leida: { type: 'boolean' } }),
};

const spec = {
  openapi: '3.0.3',
  info: { title: 'ARS Futuro API', version: '1.0.0', description: 'API REST para la gestion de afiliados, planes, polizas y operaciones de ARS Futuro.' },
  servers: [{ url: 'http://localhost:4000', description: 'Servidor local' }],
  tags: [
    { name: 'auth', description: 'Autenticacion y sesion' }, { name: 'planes', description: 'Planes de salud' }, { name: 'afiliados', description: 'Afiliados' },
    { name: 'proveedores', description: 'Proveedores medicos' }, { name: 'polizas', description: 'Polizas' }, { name: 'reclamos', description: 'Reclamos' },
    { name: 'notificaciones', description: 'Notificaciones' }, { name: 'autorizaciones', description: 'Autorizaciones medicas' }, { name: 'servicios', description: 'Servicios medicos' },
    { name: 'pagos', description: 'Pagos a proveedores' }, { name: 'facturas', description: 'Facturacion' }, { name: 'dashboard', description: 'Indicadores' },
  ],
  components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
  paths: {
    '/health': { get: { tags: ['auth'], summary: 'Comprueba el estado de la API', responses: { 200: okResponse } } },
    '/api/auth/login': { post: { tags: ['auth'], summary: 'Inicia sesion', requestBody: jsonBody(objectSchema({ usuario: { type: 'string', example: 'admin' }, password: { type: 'string', format: 'password', example: 'admin123' } })), responses: { 200: { description: 'JWT y usuario' }, 401: { description: 'Credenciales invalidas' }, 422: { description: 'Datos invalidos' } } } },
    '/api/auth/me': { get: { tags: ['auth'], summary: 'Obtiene el usuario autenticado', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/autorizaciones': {
      get: { tags: ['autorizaciones'], summary: 'Lista autorizaciones', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } },
      post: { tags: ['autorizaciones'], summary: 'Crea una autorizacion', security: bearerSecurity, requestBody: jsonBody(objectSchema({ afiliadoId: { type: 'string', format: 'uuid' }, proveedorId: { type: 'string', format: 'uuid' }, procedimiento: { type: 'string' } })), responses: { 201: okResponse, ...errorResponses } },
    },
    '/api/autorizaciones/{id}': { parameters: [uuidParameter], get: { tags: ['autorizaciones'], summary: 'Obtiene una autorizacion', security: bearerSecurity, responses: { 200: okResponse, 404: { description: 'No encontrado' }, ...errorResponses } } },
    '/api/autorizaciones/{id}/aprobar': { parameters: [uuidParameter], patch: { tags: ['autorizaciones'], summary: 'Aprueba una autorizacion', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/autorizaciones/{id}/rechazar': { parameters: [uuidParameter], patch: { tags: ['autorizaciones'], summary: 'Rechaza una autorizacion', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/servicios': {
      get: { tags: ['servicios'], summary: 'Lista servicios medicos', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } },
      post: { tags: ['servicios'], summary: 'Crea un servicio medico', security: bearerSecurity, requestBody: jsonBody(objectSchema({ afiliadoId: { type: 'string', format: 'uuid' }, proveedorId: { type: 'string', format: 'uuid' }, descripcion: { type: 'string' }, costo: { type: 'number' } })), responses: { 201: okResponse, ...errorResponses } },
    },
    '/api/pagos': {
      get: { tags: ['pagos'], summary: 'Lista pagos', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } },
      post: { tags: ['pagos'], summary: 'Emite un pago', security: bearerSecurity, requestBody: jsonBody(objectSchema({ servicioId: { type: 'string', format: 'uuid' }, monto: { type: 'number' }, referenciaBanco: { type: 'string' }, metodo: { type: 'string' } })), responses: { 201: okResponse, ...errorResponses } },
    },
    '/api/facturas': { get: { tags: ['facturas'], summary: 'Lista facturas', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/facturas/generar': { post: { tags: ['facturas'], summary: 'Genera facturas', security: bearerSecurity, requestBody: jsonBody(objectSchema({ periodo: { type: 'string', example: '2026-09' } })), responses: { 201: okResponse, ...errorResponses } } },
    '/api/facturas/{id}/pagar': { parameters: [uuidParameter], patch: { tags: ['facturas'], summary: 'Marca una factura como pagada', security: bearerSecurity, requestBody: jsonBody(objectSchema({ referencia: { type: 'string' } })), responses: { 200: okResponse, ...errorResponses } } },
    '/api/facturas/{id}/recordatorio': { parameters: [uuidParameter], patch: { tags: ['facturas'], summary: 'Envia recordatorio de factura', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/facturas/{id}/gracia': { parameters: [uuidParameter], patch: { tags: ['facturas'], summary: 'Pasa una factura a periodo de gracia', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/facturas/{id}/suspender': { parameters: [uuidParameter], patch: { tags: ['facturas'], summary: 'Suspende una factura', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    '/api/dashboard/resumen': { get: { tags: ['dashboard'], summary: 'Obtiene los indicadores del dashboard', security: bearerSecurity, responses: { 200: okResponse, ...errorResponses } } },
    ...crudPaths('planes', resourceSchemas.planes), ...crudPaths('proveedores', resourceSchemas.proveedores), ...crudPaths('polizas', resourceSchemas.polizas),
    ...crudPaths('afiliados', resourceSchemas.afiliados), ...crudPaths('reclamos', resourceSchemas.reclamos), ...crudPaths('notificaciones', resourceSchemas.notificaciones),
  },
};

export const swaggerSpec = swaggerJsdoc({ definition: spec, apis: [] });