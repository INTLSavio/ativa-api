import { Scheduling } from "@prisma/client";

import { SchedulingRepository } from "../../repositories/schedulings-repository";

interface CreateSchedulingUseCaseRequest {
  carName: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  car_id: string;
}

interface CreateSchedulingUseCaseResponse {
    scheduling: Scheduling;
}

export class CreateSchedulingUseCase {

	constructor(private schedulingRepository: SchedulingRepository) {}

	async execute({ 
		carName,
    email,
    name,
    phone,
    date,
    car_id
	}: CreateSchedulingUseCaseRequest): Promise<CreateSchedulingUseCaseResponse> {
        
		const scheduling = await this.schedulingRepository.create({
			carName,
      email,
      name,
      phone,
      date,
      car_id
		});

		return {
			scheduling
		};
	}
}

