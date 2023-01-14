import { Router } from "express";

import { getLenovoInfo, searchForProduct } from "../controllers";

const router = Router();

router.get("/lenovo", getLenovoInfo);
router.get("/search/:product", searchForProduct);

export default router;
