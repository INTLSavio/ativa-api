import { Car } from "@prisma/client";

import { CarRepository } from "../../repositories/cars-repository";

interface FindCarUseCaseResponse {
    car: Car | null;
}

export class FindCarUseCase {

	constructor(private carsRepository: CarRepository) {}

	async execute(id: string): Promise<FindCarUseCaseResponse> {
        
		const car = await this.carsRepository.findById(id);

		return {
			car
		};
	}
}

