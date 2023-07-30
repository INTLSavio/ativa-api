import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { CarRepository } from "../cars-repository";
import { GetResult } from "@prisma/client/runtime/library";

export class PrismaCarRepository implements CarRepository {

    async create(data: Prisma.CarCreateInput) {
		const car = await prisma.car.create({
			data
		});

		return car;
	}

	async list() {
        const cars = await prisma.car.findMany();

        return cars;
    }

	async findById(id: string) {
		const car = await prisma.car.findUnique({
			where: {
				id
			}
		})

		return car
	}
}