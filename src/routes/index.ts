import { Router } from 'express';

import { schedulingRouter } from '../http/controllers/scheduling/routes';
import { carRouter } from '../http/controllers/car/routes';

export const routes = Router();

routes.use('/schedulings', schedulingRouter);
routes.use('/cars', carRouter);


