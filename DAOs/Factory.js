import LibroMemoryDao from "./Memory/LibroMemoryDao.js";

class Factory {
  constructor() {
    this.libroDao = new LibroMemoryDao();
  }

  static factory = (modo) => {
    if (modo === "memory") {
      return {
        libroDao: new LibroMemoryDao(),
      };
    }
    if (modo === "sql") {
      return {
        libroDao: "libroSqlDao",
      };
    }
    if (modo === "mongo") {
      return {
        libroDao: "libroMongoDao",
      };
    }
  };
}

export default Factory;
