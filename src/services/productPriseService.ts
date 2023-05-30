import {
  IProductPrice,
  createProductPrice,
  selectProductPrices
} from "../models/productPriceModel";

const createProductPriceRecord = (productPrce: IProductPrice) => {
  return createProductPrice(productPrce);
};

const getProductPrices = async (storeName: string) => {
  // console.log('debug getProductPrices', storeName)
  const res = await selectProductPrices(storeName);
  console.log('debug getProductPrices: ', res)
  return res;
};

export { createProductPrice, getProductPrices };