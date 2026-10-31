import { check, sleep } from "k6";
import http from "k6/http";

import { BASE_URL, isSuccessStatus, login, parseJsonSafe } from "./helpers.js";

export const options = {
	vus: 1,
	iterations: 1,
	thresholds: {
		http_req_failed: ["rate<0.01"],
		http_req_duration: ["p(95)<2000"],
	},
};

export default function () {
	const token = login();
	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};

	const afiliadosRes = http.get(`${BASE_URL}/api/afiliados`, { headers });
	const proveedoresRes = http.get(`${BASE_URL}/api/proveedores`, { headers });
	const serviciosRes = http.get(`${BASE_URL}/api/servicios`, { headers });

	check(afiliadosRes, {
		"list afiliados success": (r) =>
			r.status === 200 && Array.isArray(r.json()),
	});
	check(proveedoresRes, {
		"list proveedores success": (r) =>
			r.status === 200 && Array.isArray(r.json()),
	});
	check(serviciosRes, {
		"list servicios success": (r) =>
			r.status === 200 && Array.isArray(r.json()),
	});

	const afiliados =
		afiliadosRes.status === 200 ? parseJsonSafe(afiliadosRes) || [] : [];
	const proveedores =
		proveedoresRes.status === 200 ? parseJsonSafe(proveedoresRes) || [] : [];

	if (afiliados.length > 0 && proveedores.length > 0) {
		const authorizationRes = http.post(
			`${BASE_URL}/api/autorizaciones`,
			JSON.stringify({
				afiliadoId: afiliados[0].id,
				proveedorId: proveedores[0].id,
				procedimiento: "Consulta K6",
			}),
			{ headers },
		);

		check(authorizationRes, {
			"create authorization success": (r) => isSuccessStatus(r),
		});

		const serviceRes = http.post(
			`${BASE_URL}/api/servicios`,
			JSON.stringify({
				afiliadoId: afiliados[0].id,
				proveedorId: proveedores[0].id,
				descripcion: "Servicio K6 de prueba",
				costo: 1500,
			}),
			{ headers },
		);

		check(serviceRes, {
			"create service success": (r) => isSuccessStatus(r),
		});

		const serviceData = parseJsonSafe(serviceRes) || {};
		if (serviceData.id) {
			const paymentRes = http.post(
				`${BASE_URL}/api/pagos`,
				JSON.stringify({
					servicioId: serviceData.id,
					monto: 1500,
					referenciaBanco: `REF-${Date.now()}`,
					metodo: "TRANSFERENCIA",
				}),
				{ headers },
			);

			check(paymentRes, {
				"create payment success": (r) => isSuccessStatus(r),
			});
		}
	}

	const invoiceRes = http.post(
		`${BASE_URL}/api/facturas/generar`,
		JSON.stringify({ periodo: "2026-09" }),
		{ headers },
	);

	check(invoiceRes, {
		"generate invoices success": (r) => isSuccessStatus(r),
	});

	const dashboardRes = http.get(`${BASE_URL}/api/dashboard/resumen`, {
		headers,
	});
	check(dashboardRes, {
		"dashboard success": (r) => r.status === 200 && !!parseJsonSafe(r),
	});

	sleep(1);
}
