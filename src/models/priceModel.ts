import { db } from "../utils/database";

interface IPrice {
  id: number,
  productId: number,
  storeName: string,
  timestamp: Date,
  price: string
}

const createProductPrice =(price: IPrice): void => {
  db.run(
    `INSERT INTO prices (product_id, store_id, timestamp, price) values (
      ?, (SELECT id from stores where name=?), ?, ?
    )`,
    [price.productId, price.storeName, price.timestamp, price.price]
  )
};