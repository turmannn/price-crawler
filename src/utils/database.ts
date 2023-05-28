import { Database } from 'sqlite3';

// const db = new Database('~/dbs/price-checker'); // prod
const db = new Database('dbs.price-checker.db'); // local TODO: how to distinguis between prod and local and execute different code based on env
// const db = new Database('dbs.price-checker'); // lo

const initDb = async(): Promise<void> => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS stores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      store_id NUMBER NOT NULL REFERENCES stores(id)
    );

    CREATE TABLE IF NOT EXISTS prices (
      id  INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL REFERENCES products(id),
      store_id INTEGER NOT NULL REFERENCES stores(id),
      timestamp TEXT NOT NULL,
      price TEXT NOT NULL
    );
  `)
}
export { initDb, db};
