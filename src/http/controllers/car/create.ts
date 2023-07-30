import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateCarUseCase } from '../../../use-cases/factories/cars/makeCreateUseCase';

export async function create(req: Request, res: Response) {
    const createCarBodySchema  = z.object({
        ano: z.string(),
        desc: z.string(),
        img: z.string(),
        km: z.number(),
        local: z.string(),
        nome: z.string(),
        preco: z.string(),
    });

	const { ano, desc, img, km, local, nome, preco } = createCarBodySchema.parse(req.body);

    const createCarUseCase = makeCreateCarUseCase();

    await createCarUseCase.execute({
        ano,
        desc,
        img,
        km,
        local,
        nome,
        preco
    });

    return res.status(201).send();
}