import { Router } from "express";
import xRoutes from "./xRoutes.js";

const router = Router();

router.use("/x", xRoutes)


export default router