import { PrismaSchedulingRepository } from "../../../repositories/prisma/prisma-schedulings-repository";
import { CreateSchedulingUseCase } from "../../schedulings/create";

export function makeCreateSchedulingUseCase() {
	const schedulingsRepository = new PrismaSchedulingRepository();
	const createSchedulingUseCase = new CreateSchedulingUseCase(schedulingsRepository);

	return createSchedulingUseCase;
}