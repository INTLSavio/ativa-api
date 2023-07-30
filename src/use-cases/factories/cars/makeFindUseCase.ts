import { PrismaCarRepository } from "../../../repositories/prisma/prisma-cars-repository";
import { FindCarUseCase } from "../../cars/find";

export function makeFindUseCase() {
	const carsRepository = new PrismaCarRepository();
	const findCarUseCase = new FindCarUseCase(carsRepository);

	return findCarUseCase;
}