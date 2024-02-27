import Factory from "../DAOs/Factory.js";
import { MODO } from "../Config/config.js";

class LibroApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  altaLibro = async (libro) => {
    try {
      const data = await this.factory.libroDao.agregar(libro);
      return data;
    } catch (error) {
      throw error;
    }
  };

  bajaLibro = async (codigo) => {
    try {
      const data = await this.factory.libroDao.eliminarPorCodigo(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  };

  alquilarLibro = async (codigo) => {
    try {
      const data = await this.factory.libroDao.alquilar(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  marcarNoApto = async (codigo) => {
    try {
      const data = await this.factory.libroDao.marcarNoApto(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  };
  obtenerLibroPorCodigo = async (codigo) => {
    try {
      const data = await this.factory.libroDao.obtenerPorCodigo(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  };
  obtenerPorEstado = async (estado) => {
    try {
      const data = await this.factory.libroDao.obtenerPorEstado(estado);
      return data;
    } catch (error) {
      throw error;
    }
  };
  listarLibros = async () => {
    try {
      const data = await this.factory.libroDao.getAll();
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarEstados = async () => {
    try {
      const librosDisponibles = await this.factory.libroDao.getByEstado(
        "disponible"
      );
      const librosAlquilados = await this.factory.libroDao.getByEstado(
        "alquilado"
      );
      const librosNoAptos = await this.factory.libroDao.getByEstado("no-apto");
      return { librosDisponibles, librosAlquilados, librosNoAptos };
    } catch (error) {
      throw error;
    }
  };

  verificarPremio = async () => {
    try {
      const response = await axios.get("https://libros.deno.dev/premios");
      const { sorteo, premio } = response.data;
      return { sorteo, premio };
    } catch (error) {
      throw error;
    }
  };
}

export default LibroApi;
