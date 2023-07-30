import { Scheduling } from "@prisma/client";
import { getHours } from 'date-fns'

import { SchedulingRepository } from "../../repositories/schedulings-repository";

interface ListAvailabilityUseCaseRequest {
    day: number;
    month: number;
    year: number;
    car_id: string;
}

interface HoursAvailable {
    hour: number;
    availability: boolean;
}

type ListAvailabilityUseCaseResponse = HoursAvailable[]

export class ListAvailabilityUseCase {

	constructor(private schedulingRepository: SchedulingRepository) {}

	async execute({
        day,
        month,
        year,
        car_id
    }: ListAvailabilityUseCaseRequest): Promise<ListAvailabilityUseCaseResponse> {
        
		const schedulings = await this.schedulingRepository.listAvailability({
            day,
            month,
            year,
            car_id
        });

        const hourStart = 8;
        const eachHourArray = Array.from(
            { length: 10 },
            (_, index) => index + hourStart,
        );
        console.log(schedulings)
        const availability = eachHourArray.map(hour => {
            const hasSchedulingInHour = schedulings.find(
                scheduling => getHours(scheduling.date) === hour
            );
            
            return {
                hour,
                availability: !hasSchedulingInHour
            }
        });

        return availability;
	}
}

