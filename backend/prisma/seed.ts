import bcrypt from "bcryptjs";
import { Role } from "../src/lib/generated/client/index.js";
import { prisma } from "../src/lib/prisma.ts";

/*
|--------------------------------------------------------------------------
| PLANES
|--------------------------------------------------------------------------
*/

const plans = [
	{
		id: "BASICO",
		name: "Plan Básico de Salud",
		consultationCopay: 200,
		coverage: {
			consultas: true,
			laboratorio: true,
			emergencias: true,
			hospitalizacion: true,
			odontologia: false,
			saludMental: false,
		},
	},
	{
		id: "PLUS",
		name: "Plan Complementario",
		consultationCopay: 100,
		coverage: {
			consultas: true,
			laboratorio: true,
			emergencias: true,
			hospitalizacion: true,
			odontologia: true,
			saludMental: false,
		},
	},
	{
		id: "PREMIUM",
		name: "Plan Premium",
		consultationCopay: 50,
		coverage: {
			consultas: true,
			laboratorio: true,
			emergencias: true,
			hospitalizacion: true,
			odontologia: true,
			saludMental: true,
		},
	},
	{
		id: "FAMILIAR",
		name: "Plan Familiar",
		consultationCopay: 75,
		coverage: {
			consultas: true,
			laboratorio: true,
			emergencias: true,
			hospitalizacion: true,
			odontologia: true,
			saludMental: true,
		},
	},
	{
		id: "JOVEN",
		name: "Plan Joven",
		consultationCopay: 125,
		coverage: {
			consultas: true,
			laboratorio: true,
			emergencias: true,
			hospitalizacion: false,
			odontologia: true,
			saludMental: true,
		},
	},
];

/*
|--------------------------------------------------------------------------
| USUARIOS DEL SISTEMA
|--------------------------------------------------------------------------
*/

async function main() {
	const users = [
		{
			username: "admin",
			name: "Administrador Principal",
			role: Role.ADMINISTRATOR,
			password: "admin123",
		},
		{
			username: "admin2",
			name: "Administrador Secundario",
			role: Role.ADMINISTRATOR,
			password: "admin456",
		},
		{
			username: "agente",
			name: "Agente ARS",
			role: Role.AGENT,
			password: "agente123",
		},
		{
			username: "agente2",
			name: "Laura Martínez",
			role: Role.AGENT,
			password: "agente456",
		},
		{
			username: "agente3",
			name: "Carlos Rodríguez",
			role: Role.AGENT,
			password: "agente789",
		},
		{
			username: "supervisor",
			name: "Supervisor General",
			role: Role.SUPERVISOR,
			password: "super123",
		},
		{
			username: "supervisor2",
			name: "Supervisor Operativo",
			role: Role.SUPERVISOR,
			password: "super456",
		},
	] as const;

	for (const user of users) {
		await prisma.user.upsert({
			where: {
				username: user.username,
			},
			update: {
				name: user.name,
				role: user.role,
			},
			create: {
				username: user.username,
				name: user.name,
				role: user.role,
				passwordHash: await bcrypt.hash(user.password, 12),
			},
		});
	}

	/*
    |--------------------------------------------------------------------------
    | CREAR PLANES
    |--------------------------------------------------------------------------
    */

	for (const plan of plans) {
		await prisma.plan.upsert({
			where: {
				id: plan.id,
			},
			update: plan,
			create: plan,
		});
	}

	/*
    |--------------------------------------------------------------------------
    | PROVEEDORES DE SERVICIOS DE SALUD
    |--------------------------------------------------------------------------
    */

	const providers = [
		{
			name: "Hospital General Plaza de la Salud",
			type: "Hospital",
			city: "Santo Domingo",
			phone: "+1 809 555 0001",
		},
		{
			name: "CEDIMAT",
			type: "Centro Médico",
			city: "Santo Domingo",
			phone: "+1 809 555 0002",
		},
		{
			name: "Laboratorio Referencia",
			type: "Laboratorio",
			city: "Santo Domingo",
			phone: "+1 809 555 0003",
		},
		{
			name: "Hospital Metropolitano de Santiago",
			type: "Hospital",
			city: "Santiago",
			phone: "+1 809 555 0004",
		},
		{
			name: "Clínica Abreu",
			type: "Clínica",
			city: "Santo Domingo",
			phone: "+1 809 555 0005",
		},
		{
			name: "Centro Médico UCE",
			type: "Centro Médico",
			city: "Santo Domingo",
			phone: "+1 809 555 0006",
		},
		{
			name: "Centro Médico Dominicano",
			type: "Centro Médico",
			city: "Santo Domingo",
			phone: "+1 809 555 0007",
		},
		{
			name: "Laboratorio Amadita",
			type: "Laboratorio",
			city: "Santo Domingo",
			phone: "+1 809 555 0008",
		},
		{
			name: "Laboratorio Patria Rivas",
			type: "Laboratorio",
			city: "Santo Domingo",
			phone: "+1 809 555 0009",
		},
		{
			name: "Hospital Regional José María Cabral y Báez",
			type: "Hospital",
			city: "Santiago",
			phone: "+1 809 555 0010",
		},
		{
			name: "Hospital Regional Dr. Antonio Musa",
			type: "Hospital",
			city: "San Pedro de Macorís",
			phone: "+1 809 555 0011",
		},
		{
			name: "Hospital Regional Taiwán",
			type: "Hospital",
			city: "Azua",
			phone: "+1 809 555 0012",
		},
		{
			name: "Centro Médico Bournigal",
			type: "Centro Médico",
			city: "Puerto Plata",
			phone: "+1 809 555 0013",
		},
		{
			name: "Clínica Unión Médica",
			type: "Clínica",
			city: "Santiago",
			phone: "+1 809 555 0014",
		},
		{
			name: "Centro Diagnóstico Avanzado",
			type: "Imagenología",
			city: "Santo Domingo",
			phone: "+1 809 555 0015",
		},
	];

	for (const provider of providers) {
		const found = await prisma.provider.findFirst({
			where: {
				name: provider.name,
			},
		});

		if (!found) {
			await prisma.provider.create({
				data: provider,
			});
		}
	}

	/*
    |--------------------------------------------------------------------------
    | PÓLIZAS
    |--------------------------------------------------------------------------
    */

	const policies = [
		{
			id: "P-001",
			company: "COSEVI, S.R.L.",
			planId: "PREMIUM",
			startDate: new Date("2022-11-01"),
			endDate: new Date("2026-10-31"),
			monthlyPremium: 185000,
			insuredCount: 52,
		},
		{
			id: "P-002",
			company: "Transportes Nacionales, S.A.",
			planId: "PLUS",
			startDate: new Date("2024-01-01"),
			endDate: new Date("2027-12-31"),
			monthlyPremium: 125000,
			insuredCount: 38,
		},
		{
			id: "P-003",
			company: "Tecnología Caribe, S.R.L.",
			planId: "PREMIUM",
			startDate: new Date("2025-01-15"),
			endDate: new Date("2027-01-14"),
			monthlyPremium: 250000,
			insuredCount: 75,
		},
		{
			id: "P-004",
			company: "Comercial Martínez",
			planId: "BASICO",
			startDate: new Date("2025-03-01"),
			endDate: new Date("2027-02-28"),
			monthlyPremium: 85000,
			insuredCount: 24,
		},
		{
			id: "P-005",
			company: "Servicios Profesionales del Caribe",
			planId: "FAMILIAR",
			startDate: new Date("2025-06-01"),
			endDate: new Date("2027-05-31"),
			monthlyPremium: 145000,
			insuredCount: 44,
		},
		{
			id: "P-006",
			company: "Grupo Empresarial Dominicano",
			planId: "PREMIUM",
			startDate: new Date("2026-01-01"),
			endDate: new Date("2028-12-31"),
			monthlyPremium: 310000,
			insuredCount: 96,
		},
	];

	for (const policyData of policies) {
		await prisma.policy.upsert({
			where: {
				id: policyData.id,
			},
			update: policyData,
			create: policyData,
		});
	}

	/*
    |--------------------------------------------------------------------------
    | ASEGURADOS
    |--------------------------------------------------------------------------
    */

	const insuredPeople = [
		{
			name: "María Gonzalo Padilla",
			nationalId: "001-1234567-8",
			planId: "PREMIUM",
			policyId: "P-001",
			startDate: new Date("2023-05-10"),
			birthDate: new Date("1991-09-14"),
			phone: "+1 809 555 1111",
			email: "maria.padilla@demo.do",
			dependents: 1,
		},
		{
			name: "Juan Carlos Pérez",
			nationalId: "001-2345678-9",
			planId: "PLUS",
			policyId: "P-002",
			startDate: new Date("2024-02-15"),
			birthDate: new Date("1987-03-21"),
			phone: "+1 809 555 1112",
			email: "juan.perez@demo.do",
			dependents: 2,
		},
		{
			name: "Ana Rodríguez Martínez",
			nationalId: "001-3456789-0",
			planId: "PREMIUM",
			policyId: "P-003",
			startDate: new Date("2025-02-01"),
			birthDate: new Date("1993-07-18"),
			phone: "+1 809 555 1113",
			email: "ana.rodriguez@demo.do",
			dependents: 0,
		},
		{
			name: "Luis Alberto Gómez",
			nationalId: "001-4567890-1",
			planId: "BASICO",
			policyId: "P-004",
			startDate: new Date("2025-03-10"),
			birthDate: new Date("1985-11-02"),
			phone: "+1 809 555 1114",
			email: "luis.gomez@demo.do",
			dependents: 3,
		},
		{
			name: "Carolina Fernández Díaz",
			nationalId: "001-5678901-2",
			planId: "FAMILIAR",
			policyId: "P-005",
			startDate: new Date("2025-06-20"),
			birthDate: new Date("1990-04-25"),
			phone: "+1 809 555 1115",
			email: "carolina.fernandez@demo.do",
			dependents: 2,
		},
		{
			name: "Pedro Antonio Jiménez",
			nationalId: "001-6789012-3",
			planId: "PREMIUM",
			policyId: "P-006",
			startDate: new Date("2026-01-15"),
			birthDate: new Date("1979-12-10"),
			phone: "+1 809 555 1116",
			email: "pedro.jimenez@demo.do",
			dependents: 4,
		},
		{
			name: "Sofía Martínez Castillo",
			nationalId: "002-7890123-4",
			planId: "PLUS",
			policyId: "P-002",
			startDate: new Date("2024-04-01"),
			birthDate: new Date("1996-08-30"),
			phone: "+1 809 555 1117",
			email: "sofia.martinez@demo.do",
			dependents: 1,
		},
		{
			name: "Roberto Sánchez Peña",
			nationalId: "002-8901234-5",
			planId: "PREMIUM",
			policyId: "P-003",
			startDate: new Date("2025-03-15"),
			birthDate: new Date("1982-01-19"),
			phone: "+1 809 555 1118",
			email: "roberto.sanchez@demo.do",
			dependents: 2,
		},
		{
			name: "Gabriela Torres Valdez",
			nationalId: "002-9012345-6",
			planId: "JOVEN",
			policyId: "P-004",
			startDate: new Date("2025-05-01"),
			birthDate: new Date("2001-06-12"),
			phone: "+1 809 555 1119",
			email: "gabriela.torres@demo.do",
			dependents: 0,
		},
		{
			name: "Miguel Ángel Ramírez",
			nationalId: "003-0123456-7",
			planId: "BASICO",
			policyId: "P-004",
			startDate: new Date("2025-07-10"),
			birthDate: new Date("1975-10-08"),
			phone: "+1 809 555 1120",
			email: "miguel.ramirez@demo.do",
			dependents: 1,
		},
		{
			name: "Daniela Hernández Cruz",
			nationalId: "003-1234567-8",
			planId: "PREMIUM",
			policyId: "P-006",
			startDate: new Date("2026-02-01"),
			birthDate: new Date("1994-02-27"),
			phone: "+1 809 555 1121",
			email: "daniela.hernandez@demo.do",
			dependents: 2,
		},
		{
			name: "Fernando Castillo Morales",
			nationalId: "003-2345678-9",
			planId: "PLUS",
			policyId: "P-002",
			startDate: new Date("2024-08-15"),
			birthDate: new Date("1988-05-16"),
			phone: "+1 809 555 1122",
			email: "fernando.castillo@demo.do",
			dependents: 3,
		},
		{
			name: "Valentina Ortiz Reyes",
			nationalId: "004-3456789-0",
			planId: "JOVEN",
			policyId: "P-005",
			startDate: new Date("2025-09-01"),
			birthDate: new Date("2002-11-23"),
			phone: "+1 809 555 1123",
			email: "valentina.ortiz@demo.do",
			dependents: 0,
		},
		{
			name: "Ricardo Núñez Santana",
			nationalId: "004-4567890-1",
			planId: "FAMILIAR",
			policyId: "P-005",
			startDate: new Date("2025-10-01"),
			birthDate: new Date("1980-03-09"),
			phone: "+1 809 555 1124",
			email: "ricardo.nunez@demo.do",
			dependents: 3,
		},
		{
			name: "Laura Isabel Medina",
			nationalId: "004-5678901-2",
			planId: "PREMIUM",
			policyId: "P-006",
			startDate: new Date("2026-03-01"),
			birthDate: new Date("1995-09-05"),
			phone: "+1 809 555 1125",
			email: "laura.medina@demo.do",
			dependents: 1,
		},
		{
			name: "José Manuel Vargas",
			nationalId: "005-6789012-3",
			planId: "BASICO",
			policyId: "P-001",
			startDate: new Date("2023-06-01"),
			birthDate: new Date("1978-07-14"),
			phone: "+1 809 555 1126",
			email: "jose.vargas@demo.do",
			dependents: 2,
		},
		{
			name: "Elena María Santos",
			nationalId: "005-7890123-4",
			planId: "PLUS",
			policyId: "P-002",
			startDate: new Date("2024-10-01"),
			birthDate: new Date("1992-12-20"),
			phone: "+1 809 555 1127",
			email: "elena.santos@demo.do",
			dependents: 1,
		},
		{
			name: "Andrés Felipe Guerrero",
			nationalId: "005-8901234-5",
			planId: "PREMIUM",
			policyId: "P-003",
			startDate: new Date("2025-04-01"),
			birthDate: new Date("1989-06-04"),
			phone: "+1 809 555 1128",
			email: "andres.guerrero@demo.do",
			dependents: 2,
		},
		{
			name: "Paola Jiménez Rosario",
			nationalId: "006-9012345-6",
			planId: "FAMILIAR",
			policyId: "P-005",
			startDate: new Date("2025-11-15"),
			birthDate: new Date("1986-01-28"),
			phone: "+1 809 555 1129",
			email: "paola.jimenez@demo.do",
			dependents: 4,
		},
		{
			name: "Cristian Alberto Díaz",
			nationalId: "006-0123456-7",
			planId: "JOVEN",
			policyId: "P-004",
			startDate: new Date("2025-12-01"),
			birthDate: new Date("2000-03-17"),
			phone: "+1 809 555 1130",
			email: "cristian.diaz@demo.do",
			dependents: 0,
		},
	];

	/*
    |--------------------------------------------------------------------------
    | CREAR ASEGURADOS
    |--------------------------------------------------------------------------
    */

	for (const person of insuredPeople) {
		await prisma.insured.upsert({
			where: {
				nationalId: person.nationalId,
			},
			update: {
				name: person.name,
				planId: person.planId,
				policyId: person.policyId,
				phone: person.phone,
				email: person.email,
				dependents: person.dependents,
			},
			create: person,
		});
	}

	// Cuenta demo vinculada por cedula al primer asegurado (datos ficticios).
	await prisma.user.upsert({
		where: { username: "afiliado" },
		update: {
			name: "Afiliado demo",
			role: Role.INSURED,
			nationalId: "00112345678",
		},
		create: {
			username: "afiliado",
			name: "Afiliado demo",
			role: Role.INSURED,
			nationalId: "00112345678",
			passwordHash: await bcrypt.hash("afiliado123", 12),
		},
	});

	/*
    |--------------------------------------------------------------------------
    | RESUMEN
    |--------------------------------------------------------------------------
    */

	console.log("");
	console.log("==============================================");
	console.log("       MEDISALUD - SEED COMPLETADO");
	console.log("==============================================");
	console.log("");
	console.log("Usuarios creados:");
	console.log("----------------------------------------------");
	console.log("Administrador : admin / admin123");
	console.log("Administrador : admin2 / admin456");
	console.log("Agente        : agente / agente123");
	console.log("Agente        : agente2 / agente456");
	console.log("Agente        : agente3 / agente789");
	console.log("Supervisor    : supervisor / super123");
	console.log("Supervisor    : supervisor2 / super456");
	console.log("Afiliado      : afiliado / afiliado123");
	console.log("");
	console.log(`Planes       : ${plans.length}`);
	console.log(`Proveedores  : ${providers.length}`);
	console.log(`Pólizas      : ${policies.length}`);
	console.log(`Asegurados   : ${insuredPeople.length}`);
	console.log("");
	console.log("Datos demo creados correctamente.");
	console.log("==============================================");
}

main()
	.catch((error) => {
		console.error("Error ejecutando seed:", error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
