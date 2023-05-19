import { Router } from "express";
import { getProvider } from "../controllers/providerController";

const router = Router();

router.get('/', getProvider);

export default router;