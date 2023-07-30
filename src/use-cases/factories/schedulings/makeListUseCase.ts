import { PrismaSchedulingRepository } from "../../../repositories/prisma/prisma-schedulings-repository";
import { ListSchedulingsUseCase } from "../../schedulings/list";

export function makeListSchedulingUseCase() {
	const schedulingsRepository = new PrismaSchedulingRepository();
	const listSchedulingUseCase = new ListSchedulingsUseCase(schedulingsRepository);

	return listSchedulingUseCase;
}