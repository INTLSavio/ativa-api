import { Prisma, Scheduling } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { SchedulingRepository } from "../schedulings-repository";

interface ListAavailabilityRequest {
    day: number;
    month: number;
    year: number;
	car_id: string;
}

export class PrismaSchedulingRepository implements SchedulingRepository {

    async create(data: Prisma.SchedulingUncheckedCreateInput) {
		const scheduling = await prisma.scheduling.create({
			data
		});

		return scheduling;
	}

	async list() {
        const schedulings = await prisma.scheduling.findMany();

        return schedulings;
    }

	async listAvailability({ day, month, year, car_id }: ListAavailabilityRequest) {
		const parsedMonth = String(month).padStart(2, '0');
		const parsedDay = String(day).padStart(2, '0');
		
		const query = `SELECT * FROM schedulings WHERE to_char("date", 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}' AND car_id = '${car_id}';`
		const appointments = await prisma.$queryRaw<Promise<Scheduling[]>>(Prisma.raw(query));

		return appointments;
	}
}