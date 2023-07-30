import { PrismaCarRepository } from "../../../repositories/prisma/prisma-cars-repository";
import { ListCarsUseCase } from "../../cars/list";

export function makeListCarUseCase() {
	const carsRepository = new PrismaCarRepository();
	const listCarsUseCase = new ListCarsUseCase(carsRepository);

	return listCarsUseCase;
}