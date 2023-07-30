import { PrismaCarRepository } from "../../../repositories/prisma/prisma-cars-repository";
import { CreateCarUseCase } from "../../cars/create";

export function makeCreateCarUseCase() {
	const carsRepository = new PrismaCarRepository();
	const createCarUseCase = new CreateCarUseCase(carsRepository);

	return createCarUseCase;
}