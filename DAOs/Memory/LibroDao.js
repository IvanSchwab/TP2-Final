class LibroDAO {
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
    this.libros = [libro1, libro2];
  }

  agregar = async (libro) => {
    this.libros.push(libro);
  };

  obtenerPorCodigo = async (codigo) => {
    return this.libros.find((libro) => libro.codigo === codigo);
  };

  actualizar = async (libroActualizado) => {
    const index = this.libros.findIndex(
      (libro) => libro.codigo === libroActualizado.codigo
    );
    if (index !== -1) {
      this.libros[index] = libroActualizado;
    }
  };

  eliminarPorCodigo = async (codigo) => {
    const index = this.libros.findIndex((libro) => libro.codigo === codigo);
    if (index !== -1) {
      const libroEliminado = this.libros.splice(index, 1)[0];
      return libroEliminado;
    }
    return null;
  };
}

export default LibroDAO;
