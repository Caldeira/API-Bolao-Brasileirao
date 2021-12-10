import * as express from 'express';
import createUserRouter from './userRouter';
import createEnderecoRouter from './enderecoRouter';
import createRodadaRouter from './rodadaRouter';
import createTimeRouter from './timeRouter';

const createRouters = (app: express.Express) => {
  app.use('/users', createUserRouter());
  app.use('/enderecos', createEnderecoRouter());
  app.use('/rodadas', createRodadaRouter());
  app.use('/times', createTimeRouter());
};

export default createRouters;
