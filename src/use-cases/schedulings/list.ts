import { Scheduling } from "@prisma/client";

import { SchedulingRepository } from "../../repositories/schedulings-repository";

interface ListSchedulingsUseCaseResponse {
    schedulings: Scheduling[];
}

export class ListSchedulingsUseCase {

	constructor(private schedulingRepository: SchedulingRepository) {}

	async execute(): Promise<ListSchedulingsUseCaseResponse> {
        
		const schedulings = await this.schedulingRepository.list();

		return {
			schedulings
		};
	}
}

