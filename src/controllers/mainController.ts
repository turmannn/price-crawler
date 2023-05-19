import { Request, Response } from 'express';

export const getMain = (req: Request, res: Response) => {
  console.log('Hello, Epress!')
  res.send('Hello, Epress!');
};