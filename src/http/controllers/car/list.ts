import { Request, Response } from 'express';
import { makeListCarUseCase } from '../../../use-cases/factories/cars/makeListUseCase';

export async function list(req: Request, res: Response) {

    const listCarUseCase = makeListCarUseCase();

    const cars = await listCarUseCase.execute();

    return res.status(200).send(cars);
}