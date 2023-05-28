import { db } from '../utils/database';

interface Store {
  id: number;
  name: string;
}

const createStore = async (store: Store) => {
  throw new Error('not implemented');
};