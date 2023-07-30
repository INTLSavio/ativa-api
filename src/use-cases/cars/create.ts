import { Car } from "@prisma/client";

import { CarRepository } from "../../repositories/cars-repository";

interface CreateCarUseCaseRequest {
  nome:  string;
  img:   string;
  desc:  string;
  preco: string;
  ano:   string;
  km:    number;
  local: string;
}

interface CreateCarUseCaseResponse {
  car: Car;
}

export class CreateCarUseCase {

	constructor(private carsRepository: CarRepository) {}

	async execute({ 
    nome,  
    img,  
    desc,  
    preco, 
    ano,   
    km,  
    local
	}: CreateCarUseCaseRequest): Promise<CreateCarUseCaseResponse> {
        
		const car = await this.carsRepository.create({
			nome,
      img,
      desc,
      preco,
      ano,
      km,  
      local
		});

		return {
			car
		};
	}
}

