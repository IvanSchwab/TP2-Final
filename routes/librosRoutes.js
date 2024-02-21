import { Router } from "express";
import LibroController from "../controllers/LibroController.js";

const libroController = new LibroController();
const libroRouter = Router();

libroRouter.post("/", libroController.crearLibro);
libroRouter.delete("/:codigo", libroController.bajaLibro);
libroRouter.get("/", libroController.listarLibros);
libroRouter.get("/", libroController.listarEstados);
libroRouter.put("/:codigo/alquilar", libroController.alquilarLibro);
libroRouter.put("/:codigo/devolver", libroController.devolverLibro);
libroRouter.put("/:codigo/no-apto", libroController.marcarNoApto);

export default libroRouter;
