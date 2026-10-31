import { prisma } from "../lib/prisma.js";

export class NotificationService {
	constructor(private readonly database = prisma) {}

	create = (data) => this.database.notification.create({ data });
}

export const notificationService = new NotificationService();
export const notify = notificationService.create;
