import { Router } from "express";
import librosRoutes from "./librosRoutes.js";

const router = Router();

router.use("/libro", librosRoutes)


export default router