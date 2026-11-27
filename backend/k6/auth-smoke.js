import http from "k6/http";
import { check, sleep } from "k6";

import {
	BASE_URL,
	PASSWORD,
	USERNAME,
	isSuccessStatus,
	parseJsonSafe,
} from "./helpers.js";

export const options = {
	vus: 1,
	iterations: 1,
	thresholds: {
		http_req_failed: ["rate<0.01"],
		http_req_duration: ["p(95)<1000"],
	},
};

export default function () {
	const loginRes = http.post(
		`${BASE_URL}/api/auth/login`,
		JSON.stringify({ usuario: USERNAME, password: PASSWORD }),
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	check(loginRes, {
		"login status ok": (r) => isSuccessStatus(r),
		"login returns token": (r) => !!parseJsonSafe(r)?.token,
	});

	if (!isSuccessStatus(loginRes)) {
		return;
	}

	const token = parseJsonSafe(loginRes)?.token;

	const meRes = http.get(`${BASE_URL}/api/auth/me`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	check(meRes, {
		"me status ok": (r) => isSuccessStatus(r),
		"me returns user": (r) =>
			!!parseJsonSafe(r)?.usuario || !!parseJsonSafe(r)?.user,
	});

	sleep(1);
}
