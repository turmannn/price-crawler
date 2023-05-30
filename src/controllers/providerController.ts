import { Request, Response } from 'express';
import { getProductPrices } from '../services/productPriseService';

export const getProvider = (req: Request, res: Response) => {
  const { storeName } = req.query;

  
  if (!storeName) throw new Error('storeName is required param');

  console.log('Hello, from provider controller!')
  const prices = getProductPrices(storeName as string)
  res.send(prices);
};