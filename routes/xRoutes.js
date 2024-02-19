import { Router } from "express";
import XController from "../controllers/XController.js";
const xController = new XController();

const xRoutes = Router();

xRoutes.post("/",xController.create)

export default xRoutes;
