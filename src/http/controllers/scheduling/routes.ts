import { Router } from 'express';
import { create } from './create';
import { list } from './list';
import { listAvailability } from './list-availability';

export const schedulingRouter = Router();

schedulingRouter.post('/', create);
schedulingRouter.get('/', list);
schedulingRouter.get('/day-availability', listAvailability);

