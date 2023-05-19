import { Router } from 'express';
import providerRoutes from './providerRoutes'
import { getMain } from '../controllers/mainController';

const router = Router();

router.get('/', getMain);
router.use('/provider', providerRoutes);

export default router;