import { Request, Response } from 'express';

export const getProvider = (req: Request, res: Response) => {
  console.log('Hello, from provider controller!')
  res.send('Hello, from provider controller!');
};