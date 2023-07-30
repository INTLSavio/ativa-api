import { Car } from "@prisma/client";

import { CarRepository } from "../../repositories/cars-repository";

interface ListCarsUseCaseResponse {
    cars: Car[];
}

export class ListCarsUseCase {

	constructor(private carsRepository: CarRepository) {}

	async execute(): Promise<ListCarsUseCaseResponse> {
        
		const cars = await this.carsRepository.list();

		return {
			cars
		};
	}
}

