import { Request, Response } from 'express';
import { makeFindUseCase } from '../../../use-cases/factories/cars/makeFindUseCase';

export async function find(req: Request, res: Response) {
    const { id } = req.params;

    const findCarUseCase = makeFindUseCase();

    const car = await findCarUseCase.execute(id);

    return res.status(200).send(car);
}