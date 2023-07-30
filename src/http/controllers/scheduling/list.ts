import { Request, Response } from 'express';
import { makeListSchedulingUseCase } from '../../../use-cases/factories/schedulings/makeListUseCase';

export async function list(req: Request, res: Response) {

    const listSchedulingUseCase = makeListSchedulingUseCase();

    const schedulings = await listSchedulingUseCase.execute();

    return res.status(200).send(schedulings);
}