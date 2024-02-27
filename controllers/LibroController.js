import LibroDAO from "../DAOs/Memory/LibroMemoryDao.js";
import axios from "axios";
const libroDAO = new LibroDAO();
import LibroApi from "../Api/LibroApi.js";
import Libro from "../Models/Libro.js";

class LibroController {
  constructor() {
    this.libroApi = new LibroApi();
  }
  crearLibro = async (req, res) => {
    try {
      const { codigo, titulo, autor } = req.body;

      if (!codigo || !titulo || !autor) {
        res
          .status(500)
          .json({ errorMsg: "Código, título y autor son campos requeridos." });
      }

      const existeLibro = await this.libroApi.obtenerLibroPorCodigo(codigo);
      if (existeLibro) {
        res
          .status(500)
          .json({ errorMsg: "El libro con este código ya existe." });
      }

      const nuevoLibro = new Libro(codigo, titulo, autor);
      await this.libroApi.altaLibro(nuevoLibro);

      res
        .status(201)
        .json({ message: "Libro creado exitosamente.", libro: nuevoLibro });
    } catch (error) {
      console.error("Error al crear el libro:", error.message);
      res.status(500).json({ errorMsg: "Error al crear el libro." });
    }
  };

  bajaLibro = async (req, res) => {
    try {
      const codigoLibro = req.params.codigo;
      const libroEliminado = await this.libroApi.bajaLibro(codigoLibro);
      if (libroEliminado) {
        res.status(200).json(libroEliminado);
      } else {
        res.status(404).json({ errorMsg: "Libro no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMsg: "Error al eliminar el libro" });
    }
  };

  alquilarLibro = async (req, res) => {
    try {
      const codigoLibro = req.params.codigo;
      let libro = await this.libroApi.obtenerLibroPorCodigo(codigoLibro);
      if (!libro) {
        return res.status(404).json({ errorMsg: "Libro no encontrado" });
      }

      if (libro.estado === "disponible") {
        const response = await axios.get("https://libros.deno.dev/premios");
        const { sorteo, premio } = response.data;
        if (premio) {
          await libroDAO.eliminarPorCodigo(codigoLibro);
          return res.status(200).json({
            message:
              "¡Has ganado un premio! El libro se ha dado de baja automáticamente.",
          });
        }
        await this.libroApi.alquilarLibro(codigoLibro);
        await libroDAO.actualizar(libro);
        return res.status(200).json(libro);
      } else {
        return res
          .status(400)
          .json({ errorMsg: "El libro no está disponible para alquilar" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ errorMsg: "Error al alquilar el libro" });
    }
  };

  obtenerLibroPorCodigo = async (req, res) => {
    try {
      const codigoLibro = req.params.codigo;
      let libro = await this.libroApi.obtenerLibroPorCodigo(codigoLibro);
      if (!libro) {
        return res.status(404).json({ errorMsg: "Libro no encontrado" });
      }
      if (libro.estado !== "alquilado") {
        return res.status(400).json({ errorMsg: "El libro no está alquilado" });
      }
      libro.estado = "disponible";
      await libroDAO.actualizar(libro);
      res.status(200).json(libro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMsg: "Error al devolver el libro" });
    }
  };

  marcarNoApto = async (req, res) => {
    try {
      const codigoLibro = req.params.codigo;
      let libro = await this.libroApi.marcarNoApto(codigoLibro);
      if (!libro) {
        return res.status(404).json({ errorMsg: "Libro no encontrado" });
      }
      libro.estado = "no-apto";
      await libroDAO.actualizar(libro);
      res.status(200).json(libro);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ errorMsg: "Error al marcar el libro como no apto" });
    }
  };

  listarLibros = async (req, res) => {
    try {
      const libros = await this.libroApi.listarLibros();
      res.status(200).json(libros);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMsg: "Error al listar los libros" });
    }
  };

  listarEstados = async (req, res) => {
    try {
      const librosDisponibles = await this.libroApi.obtenerPorEstado(
        "disponible"
      );
      const librosAlquilados = await this.libroApi.obtenerPorEstado(
        "alquilado"
      );
      const librosNoAptos = await this.libroApi.obtenerPorEstado("no-apto");
      res
        .status(200)
        .json({ librosDisponibles, librosAlquilados, librosNoAptos });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ errorMsg: "Error al listar los libros por estado" });
    }
  };
}

export default LibroController;
