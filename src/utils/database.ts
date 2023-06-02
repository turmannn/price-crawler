import { Database } from 'sqlite3';

// const db = new Database('~/dbs/price-checker'); // prod
const db = new Database('dbs.price-checker.db'); // local TODO: how to distinguis between prod and local and execute different code based on env
// const db = new Database('dbs.price-checker'); // lo

db.get('PRAGMA foreign_key = ON');

const initDb = async(): Promise<void> => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS stores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      link TEXT,
      store_id NUMBER NOT NULL,
      FOREIGN KEY(store_id) REFERENCES stores(id)
    );

    CREATE TABLE IF NOT EXISTS prices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      store_id INTEGER NOT NULL,
      timestamp TEXT NOT NULL,
      price TEXT NOT NULL,
      FOREIGN KEY(product_id) REFERENCES products(id),
      FOREIGN KEY(store_id) REFERENCES stores(id)
    );
  `)
}
export { initDb, db};
