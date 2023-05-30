import { db } from "../utils/database";

interface IProductPrice {
  id: number,
  productId: number,
  productName?: string,
  storeName: string,
  timestamp: Date,
  price: string
}

interface IProductPriceTable {
    product_id: string,
    peoduct_name: string,
    store_name: string,
    timestamp: string,
    price: string
}

const createProductPrice = (productPrice: IProductPrice): void => {
  db.run(
    `INSERT INTO prices (product_id, store_id, timestamp, price)
    VALUES (?, (SELECT id from stores where name=?), ?, ?)`,
    [
      productPrice.productId,
      productPrice.storeName,
      productPrice.timestamp,
      productPrice.price
    ]
  )
};

const selectProductPrices = async (storeName: string): Promise<IProductPriceTable[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT products.id product_id, products.name peoduct_name, stores.name store_name, prices.timestamp, prices.price
      FROM prices
      INNER JOIN stores ON prices.store_id = stores.id
      INNER JOIN products ON prices.product_id = products.id
      WHERE stores.name = ?`,
      storeName,
      (err, rows) => {
        if (err) reject('cannot get product prices.');
        // console.log('debug rows:', rows)
        resolve(rows as IProductPriceTable[]);
      }
    )
  });
};

export { IProductPrice, createProductPrice, selectProductPrices };