import { Router } from 'express';
import { create } from './create';
import { list } from './list';
import { find } from './find';

export const carRouter = Router();

carRouter.post('/', create);
carRouter.get('/', list);
carRouter.get('/:id', find);

