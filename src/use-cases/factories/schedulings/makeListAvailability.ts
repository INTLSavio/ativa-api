import { PrismaSchedulingRepository } from "../../../repositories/prisma/prisma-schedulings-repository";
import { ListAvailabilityUseCase } from "../../schedulings/list-availability";

export function makeListAvailabilityUseCase() {
	const schedulingsRepository = new PrismaSchedulingRepository();
	const listAvailabilitySchedulingUseCase = new ListAvailabilityUseCase(schedulingsRepository);

	return listAvailabilitySchedulingUseCase;
}