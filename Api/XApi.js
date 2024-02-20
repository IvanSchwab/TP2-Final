import Factory from "../DAOs/Factory.js";
import { MODO } from "../Config/config.js";

class XApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  create = async (info) => {
    try {
      const data = await this.factory.xDao.create(info);
      return await data;
    } catch (error) {
      throw error;
    }
  };
  getAll = async () => {
    try {
      const data = await this.factory.xDao.getAll();
      return await data;
    } catch (error) {
      throw error;
    }
  };
  getAmount = async (amount) => {
    try {
      const data = await this.factory.xDao.getAmount(amount);
      return await data;
    } catch (error) {
      throw error;
    }
  };
}

export default XApi;
