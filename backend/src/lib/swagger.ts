import swaggerJsdoc from "swagger-jsdoc";

const bearerSecurity = [{ bearerAuth: [] }];
const uuidParameter = {
	name: "id",
	in: "path",
	required: true,
	schema: { type: "string", format: "uuid" },
};
const okResponse = { description: "Operacion exitosa" };
const errorResponses = {
	401: { description: "No autenticado" },
	403: { description: "Sin permisos suficientes" },
	422: { description: "Datos invalidos" },
};
const jsonBody = (schema: Record<string, unknown>) => ({
	required: true,
	content: { "application/json": { schema } },
});
const objectSchema = (properties: Record<string, unknown>) => ({
	type: "object",
	properties,
});

const crudPaths = (resource: string, schema: Record<string, unknown>) => ({
	[`/api/${resource}`]: {
		get: {
			tags: [resource],
			summary: `Lista ${resource}`,
			security: bearerSecurity,
			responses: {
				200: { description: `Listado de ${resource}` },
				...errorResponses,
			},
		},
		post: {
			tags: [resource],
			summary: `Crea ${resource.slice(0, -1)}`,
			...(resource === "afiliados"
				? {
						description:
							"La cedula se valida con la Cedula Validation API antes de crear el afiliado. Si no es valida, responde 422; si el servicio externo no esta disponible, responde 503.",
					}
				: {}),
			security: bearerSecurity,
			requestBody: jsonBody(schema),
			responses: {
				201: okResponse,
				...errorResponses,
				...(resource === "afiliados"
					? {
							422: {
								description: "Datos invalidos o cedula no valida",
							},
							503: {
								description:
									"El servicio externo de validacion no esta disponible",
							},
						}
					: {}),
			},
		},
	},
	[`/api/${resource}/{id}`]: {
		parameters: [uuidParameter],
		get: {
			tags: [resource],
			summary: `Obtiene un elemento de ${resource}`,
			security: bearerSecurity,
			responses: {
				200: okResponse,
				404: { description: "No encontrado" },
				...errorResponses,
			},
		},
		patch: {
			tags: [resource],
			summary: `Actualiza un elemento de ${resource}`,
			security: bearerSecurity,
			requestBody: jsonBody(schema),
			responses: {
				200: okResponse,
				404: { description: "No encontrado" },
				...errorResponses,
			},
		},
		delete: {
			tags: [resource],
			summary: `Elimina un elemento de ${resource}`,
			security: bearerSecurity,
			responses: {
				200: okResponse,
				404: { description: "No encontrado" },
				...errorResponses,
			},
		},
	},
});

const resourceSchemas = {
	planes: objectSchema({
		id: { type: "string", example: "PLAN-BASICO" },
		name: { type: "string" },
		consultationCopay: { type: "number" },
		coverage: { type: "object", additionalProperties: { type: "boolean" } },
	}),
	proveedores: objectSchema({
		name: { type: "string" },
		type: { type: "string" },
		city: { type: "string" },
		phone: { type: "string" },
	}),
	polizas: objectSchema({
		id: { type: "string" },
		company: { type: "string" },
		planId: { type: "string" },
		startDate: { type: "string", format: "date" },
		endDate: { type: "string", format: "date" },
		monthlyPremium: { type: "number" },
	}),
	afiliados: objectSchema({
		name: { type: "string" },
		nationalId: { type: "string" },
		planId: { type: "string" },
		startDate: { type: "string", format: "date" },
		email: { type: "string", format: "email" },
	}),
	reclamos: objectSchema({
		insuredId: { type: "string", format: "uuid" },
		providerId: { type: "string", format: "uuid" },
		amount: { type: "number" },
		date: { type: "string", format: "date" },
	}),
	notificaciones: objectSchema({
		userId: { type: "string", format: "uuid", nullable: true },
		type: { type: "string" },
		title: { type: "string" },
		message: { type: "string" },
		read: { type: "boolean" },
	}),
};

const spec = {
	openapi: "3.0.3",
	info: {
		title: "ARS Futuro API",
		version: "1.0.0",
		description:
			"API REST para la gestion de afiliados, planes, polizas y operaciones de ARS Futuro.",
	},
	servers: [{ url: "http://localhost:4000", description: "Servidor local" }],
	tags: [
		{ name: "auth", description: "Autenticacion y sesion" },
		{ name: "planes", description: "Planes de salud" },
		{ name: "afiliados", description: "Afiliados" },
		{
			name: "validacion-cedula",
			description:
				"API externa de validacion de cedulas de la Republica Dominicana",
		},
		{ name: "proveedores", description: "Proveedores medicos" },
		{ name: "polizas", description: "Polizas" },
		{ name: "reclamos", description: "Reclamos" },
		{ name: "notificaciones", description: "Notificaciones" },
		{ name: "autorizaciones", description: "Autorizaciones medicas" },
		{ name: "servicios", description: "Servicios medicos" },
		{ name: "pagos", description: "Pagos a proveedores" },
		{ name: "facturas", description: "Facturacion" },
		{ name: "dashboard", description: "Indicadores" },
	],
	components: {
		securitySchemes: {
			bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
		},
	},
	paths: {
		"/health": {
			get: {
				tags: ["auth"],
				summary: "Comprueba el estado de la API",
				responses: { 200: okResponse },
			},
		},
		"/api/auth/login": {
			post: {
				tags: ["auth"],
				summary: "Inicia sesion",
				requestBody: jsonBody(
					objectSchema({
						username: { type: "string", example: "admin" },
						password: {
							type: "string",
							format: "password",
							example: "admin123",
						},
					}),
				),
				responses: {
					200: { description: "JWT y usuario" },
					401: { description: "Credenciales invalidas" },
					422: { description: "Datos invalidos" },
				},
			},
		},
		"/api/auth/me": {
			get: {
				tags: ["auth"],
				summary: "Obtiene el usuario autenticado",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/v3/cedulas/{id}/validate": {
			servers: [
				{
					url: "https://api.digital.gob.do",
					description: "Portal de APIs dominicano",
				},
			],
			get: {
				tags: ["validacion-cedula"],
				summary: "Valida una cedula dominicana",
				description:
					"Endpoint abierto del Portal de APIs dominicano. Acepta una cedula o un hash y valida el formato con el algoritmo de Luhn y la base de datos de la JCE.",
				parameters: [
					{
						name: "id",
						in: "path",
						required: true,
						description: "Cedula o hash a validar",
						schema: { type: "string" },
					},
				],
				responses: {
					200: {
						description: "Resultado de la validacion",
						content: {
							"application/json": {
								schema: objectSchema({
									valid: { type: "boolean", example: true },
								}),
							},
						},
					},
					404: { description: "Cedula o hash no encontrado" },
				},
				externalDocs: {
					description: "Documentacion oficial",
					url: "https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e",
				},
			},
		},
		"/api/autorizaciones": {
			get: {
				tags: ["autorizaciones"],
				summary: "Lista autorizaciones",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
			post: {
				tags: ["autorizaciones"],
				summary: "Crea una autorizacion",
				security: bearerSecurity,
				requestBody: jsonBody(
					objectSchema({
						insuredId: { type: "string", format: "uuid" },
						providerId: { type: "string", format: "uuid" },
						procedure: { type: "string" },
					}),
				),
				responses: { 201: okResponse, ...errorResponses },
			},
		},
		"/api/autorizaciones/{id}": {
			parameters: [uuidParameter],
			get: {
				tags: ["autorizaciones"],
				summary: "Obtiene una autorizacion",
				security: bearerSecurity,
				responses: {
					200: okResponse,
					404: { description: "No encontrado" },
					...errorResponses,
				},
			},
		},
		"/api/autorizaciones/{id}/aprobar": {
			parameters: [uuidParameter],
			patch: {
				tags: ["autorizaciones"],
				summary: "Aprueba una autorizacion",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/autorizaciones/{id}/rechazar": {
			parameters: [uuidParameter],
			patch: {
				tags: ["autorizaciones"],
				summary: "Rechaza una autorizacion",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/servicios": {
			get: {
				tags: ["servicios"],
				summary: "Lista servicios medicos",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
			post: {
				tags: ["servicios"],
				summary: "Crea un servicio medico",
				security: bearerSecurity,
				requestBody: jsonBody(
					objectSchema({
						insuredId: { type: "string", format: "uuid" },
						providerId: { type: "string", format: "uuid" },
						description: { type: "string" },
						cost: { type: "number" },
					}),
				),
				responses: { 201: okResponse, ...errorResponses },
			},
		},
		"/api/pagos": {
			get: {
				tags: ["pagos"],
				summary: "Lista pagos",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
			post: {
				tags: ["pagos"],
				summary: "Emite un pago",
				security: bearerSecurity,
				requestBody: jsonBody(
					objectSchema({
						serviceId: { type: "string", format: "uuid" },
						amount: { type: "number" },
						bankReference: { type: "string" },
						method: { type: "string" },
					}),
				),
				responses: { 201: okResponse, ...errorResponses },
			},
		},
		"/api/facturas": {
			get: {
				tags: ["facturas"],
				summary: "Lista facturas",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/facturas/generar": {
			post: {
				tags: ["facturas"],
				summary: "Genera facturas",
				security: bearerSecurity,
				requestBody: jsonBody(
					objectSchema({ period: { type: "string", example: "2026-09" } }),
				),
				responses: { 201: okResponse, ...errorResponses },
			},
		},
		"/api/facturas/{id}/pagar": {
			parameters: [uuidParameter],
			patch: {
				tags: ["facturas"],
				summary: "Marca una factura como pagada",
				security: bearerSecurity,
				requestBody: jsonBody(objectSchema({ reference: { type: "string" } })),
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/facturas/{id}/recordatorio": {
			parameters: [uuidParameter],
			patch: {
				tags: ["facturas"],
				summary: "Envia recordatorio de factura",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/facturas/{id}/gracia": {
			parameters: [uuidParameter],
			patch: {
				tags: ["facturas"],
				summary: "Pasa una factura a periodo de gracia",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/facturas/{id}/suspender": {
			parameters: [uuidParameter],
			patch: {
				tags: ["facturas"],
				summary: "Suspende una factura",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		"/api/dashboard/resumen": {
			get: {
				tags: ["dashboard"],
				summary: "Obtiene los indicadores del dashboard",
				security: bearerSecurity,
				responses: { 200: okResponse, ...errorResponses },
			},
		},
		...crudPaths("planes", resourceSchemas.planes),
		...crudPaths("proveedores", resourceSchemas.proveedores),
		...crudPaths("polizas", resourceSchemas.polizas),
		...crudPaths("afiliados", resourceSchemas.afiliados),
		...crudPaths("reclamos", resourceSchemas.reclamos),
		...crudPaths("notificaciones", resourceSchemas.notificaciones),
	},
};

export const swaggerSpec = swaggerJsdoc({ definition: spec, apis: [] });
