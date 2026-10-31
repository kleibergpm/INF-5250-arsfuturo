import { check, sleep } from "k6";
import http from "k6/http";

import { BASE_URL, isSuccessStatus, login, parseJsonSafe } from "./helpers.js";

export const options = {
	vus: 1,
	iterations: 1,
	thresholds: {
		http_req_failed: ["rate<0.01"],
		http_req_duration: ["p(95)<1500"],
	},
};

export default function () {
	const token = login();
	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};

	const planId = `PLAN-${Date.now()}`;

	const createPlanRes = http.post(
		`${BASE_URL}/api/planes`,
		JSON.stringify({
			id: planId,
			nombre: "Plan K6",
			copagoConsulta: 120,
			cobertura: {
				consulta: true,
				emergencia: true,
				farmacia: false,
			},
		}),
		{ headers },
	);

	check(createPlanRes, {
		"create plan success": (r) => isSuccessStatus(r),
		"create plan has id": (r) => !!parseJsonSafe(r)?.id,
	});

	const listPlanRes = http.get(`${BASE_URL}/api/planes`, { headers });
	check(listPlanRes, {
		"list plans success": (r) => r.status === 200 && Array.isArray(r.json()),
	});

	const providerRes = http.post(
		`${BASE_URL}/api/proveedores`,
		JSON.stringify({
			nombre: "Clínica K6",
			tipo: "Especialidad",
			ciudad: "Santo Domingo",
			telefono: "8091234567",
		}),
		{ headers },
	);

	check(providerRes, {
		"create provider success": (r) => isSuccessStatus(r),
		"create provider has id": (r) => !!parseJsonSafe(r)?.id,
	});

	const providerData = parseJsonSafe(providerRes) || {};
	const providerId = providerData.id || null;

	const affiliatePayload = {
		nombre: "Afiliado K6",
		cedula: `402${Date.now().toString().slice(-8)}`,
		planId,
		polizaId: null,
		estado: "ACTIVO",
		desde: "2026-09-01",
		nacimiento: "1990-01-01",
		telefono: "8097654321",
		correo: `k6-${Date.now()}@example.com`,
		dependientes: 1,
	};

	const affiliateRes = http.post(
		`${BASE_URL}/api/afiliados`,
		JSON.stringify(affiliatePayload),
		{
			headers,
		},
	);

	check(affiliateRes, {
		"create affiliate success": (r) => isSuccessStatus(r),
		"create affiliate has id": (r) => !!parseJsonSafe(r)?.id,
	});

	const affiliateData = parseJsonSafe(affiliateRes) || {};
	const affiliateId = affiliateData.id || null;

	if (affiliateId && providerId) {
		const claimRes = http.post(
			`${BASE_URL}/api/reclamos`,
			JSON.stringify({
				afiliadoId: affiliateId,
				proveedorId: providerId,
				monto: 2500,
				fecha: "2026-09-10",
			}),
			{ headers },
		);

		check(claimRes, {
			"create claim success": (r) => isSuccessStatus(r),
		});
	}

	sleep(1);
}
