class Libro {
  constructor(codigo, titulo, autor, estado = "disponible") {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
    if (estado === "no-apto") {
      this.noApto = true;
    } else {
      this.noApto = false;
    }
  }

  marcarNoApto() {
    this.estado = "no-apto";
    this.noApto = true;
  }

  marcarDisponible() {
    this.estado = "disponible";
    this.noApto = false;
  }

  marcarAlquilado() {
    this.estado = "alquilado";
    this.noApto = false;
  }
}

export default Libro;
