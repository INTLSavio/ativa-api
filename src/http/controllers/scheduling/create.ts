import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateSchedulingUseCase } from '../../../use-cases/factories/schedulings/makeCreateUseCase';

export async function create(req: Request, res: Response) {
    const createSchedulingBodySchema  = z.object({
        carName: z.string(),
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        date: z.string(),
        car_id: z.string()
    });

	const { carName, name, phone, email, date, car_id } = createSchedulingBodySchema.parse(req.body);

    const createSchedulingUseCase = makeCreateSchedulingUseCase();

    await createSchedulingUseCase.execute({
        carName,
        name,
        phone,
        email,
        date,
        car_id    
    });

    return res.status(201).send();
}