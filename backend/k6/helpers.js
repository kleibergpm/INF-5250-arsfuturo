import http from "k6/http";

export const BASE_URL = __ENV.BASE_URL || "http://localhost:4000";
export const USERNAME = __ENV.API_USER || "admin";
export const PASSWORD = __ENV.API_PASSWORD || "admin123";

export function authHeaders(token) {
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};
}

export function isSuccessStatus(response, accepted = [200, 201]) {
	return !!response && accepted.includes(response.status);
}

export function parseJsonSafe(response) {
	if (!response || !isSuccessStatus(response)) {
		return null;
	}

	try {
		return response.json();
	} catch (error) {
		return null;
	}
}

export function login() {
	const res = http.post(
		`${BASE_URL}/api/auth/login`,
		JSON.stringify({ usuario: USERNAME, password: PASSWORD }),
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (!isSuccessStatus(res)) {
		throw new Error(`Login failed: ${res.status} ${res.body}`);
	}

	const body = parseJsonSafe(res);
	if (!body || !body.token) {
		throw new Error(`Login response did not contain a token: ${res.body}`);
	}

	return body.token;
}

export function getJson(path, token, extraHeaders = {}) {
	const res = http.get(`${BASE_URL}${path}`, {
		headers: {
			...authHeaders(token),
			...extraHeaders,
		},
	});

	return res;
}

export function postJson(path, payload, token, extraHeaders = {}) {
	return http.post(`${BASE_URL}${path}`, JSON.stringify(payload), {
		headers: {
			...authHeaders(token),
			...extraHeaders,
		},
	});
}
