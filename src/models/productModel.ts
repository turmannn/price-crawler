import { db } from '../utils/database';

interface IProduct {
  id?: number,
  name: string,
}

const createProduct = (productName: string): void => {
  db.run(
    'INSERT INTO goods (name) VALUES (?)',
    productName
    // error => {} // callback function is an optional arg
  );
};

export { IProduct, createProduct }