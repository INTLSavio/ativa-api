import { Request, Response } from 'express';
import { makeListAvailabilityUseCase } from '../../../use-cases/factories/schedulings/makeListAvailability';

export async function listAvailability(req: Request, res: Response) {

    const { day, month, year, car_id } = req.query;

    const listAvailabilityUseCase = makeListAvailabilityUseCase();

    const schedulings = await listAvailabilityUseCase.execute({
        day: Number(day), 
        month: Number(month), 
        year: Number(year),
        car_id: String(car_id)
    });

    return res.status(200).send(schedulings);
}