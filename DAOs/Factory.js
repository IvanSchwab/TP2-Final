import LibroDAO from "./Memory/LibroDao.js";

class Factory {
  constructor() {}

  static factory = (modo) => {
    if (modo === "memory") {
      return {
        libroDao: new LibroDAO(),
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
