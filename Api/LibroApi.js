import Factory from "../DAOs/Factory.js";
import { MODO } from "../Config/config.js";

class LibroApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  async altaLibro(info) {
    try {
      const data = await this.factory.libroDao.create(info);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async bajaLibro(codigo) {
    try {
      const data = await this.factory.libroDao.delete(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async alquilarLibro(codigo) {
    try {
      const data = await this.factory.libroDao.alquilar(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async devolverLibro(codigo) {
    try {
      const data = await this.factory.libroDao.devolver(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async marcarNoApto(codigo) {
    try {
      const data = await this.factory.libroDao.marcarNoApto(codigo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async listarLibros() {
    try {
      const data = await this.factory.libroDao.getAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async listarEstados() {
    try {
      const librosDisponibles = await this.factory.libroDao.getByEstado("disponible");
      const librosAlquilados = await this.factory.libroDao.getByEstado("alquilado");
      const librosNoAptos = await this.factory.libroDao.getByEstado("no-apto");
      return { librosDisponibles, librosAlquilados, librosNoAptos };
    } catch (error) {
      throw error;
    }
  }

  async verificarPremio() {
    try {
      const response = await axios.get('https://libros.deno.dev/premios');
      const { sorteo, premio } = response.data;
      return { sorteo, premio };
    } catch (error) {
      throw error;
    }
  }
}

export default LibroApi;