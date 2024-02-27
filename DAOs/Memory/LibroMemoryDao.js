import Libro from "../../Models/Libro.js";

class LibroMemoryDao {
  constructor() {
    const libro1 = new Libro(
      "001",
      "Mistborn",
      "Brandon Sanderson",
      "disponible"
    );
    const libro2 = new Libro(
      "002",
      "La Reina Roja",
      "Victoria Aveyard",
      "disponible"
    );
    const libro3 = new Libro(
      "003",
      "Cien años de soledad",
      "Gabriel García Márquez",
      "alquilado"
    );
    const libro4 = new Libro(
      "004",
      "Orgullo y prejuicio",
      "Jane Austen",
      "alquilado"
    );
    const libro5 = new Libro(
      "005",
      "Matar a un ruiseñor",
      "Harper Lee",
      "no-apto"
    );
    const libro6 = new Libro(
      "006",
      "El señor de los anillos",
      "J.R.R. Tolkien",
      "no-apto"
    );
    this.libros = [libro1, libro2, libro3, libro4, libro5, libro6];
  }

  agregar = async (libro) => {
    this.libros.push(libro);
  };

  obtenerPorCodigo = async (codigo) => {
    return this.libros.find((libro) => libro.codigo === codigo);
  };

  actualizar = async (libroActualizado) => {
    const libro = await this.obtenerPorCodigo(libroActualizado.codigo);
    if (libro) {
      const index = this.libros.indexOf(libro);
      this.libros[index] = libroActualizado;
    }
  };

  eliminarPorCodigo = async (codigo) => {
    const libro = await this.obtenerPorCodigo(codigo);
    if (libro) {
      const index = this.libros.indexOf(libro);
      this.libros.splice(index, 1);
      return libro;
    }
    return null;
  };

  alquilar = async (codigo) => {
    const libro = await this.obtenerPorCodigo(codigo);
    if (libro) {
      libro.estado = "alquilado";
      return libro;
    }
    return null;
  };

  marcarNoApto = async (codigo) => {
    const libro = await this.obtenerPorCodigo(codigo);
    if (libro) {
      libro.estado = "no-apto";
      return libro;
    }
    return null;
  };

  getAll = async () => {
    return this.libros;
  };

  obtenerPorEstado = async (estado) => {
    return this.libros.filter((libro) => libro.estado === estado);
  };
}

export default LibroMemoryDao;
