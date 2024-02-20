import XApi from "../Api/XApi.js";

class XController {
  constructor() {
    this.xApi = new XApi();
  }

  create = async (req, res) => {
    try {
      const { info } = req.body;
      if (!info) throw new Error("");
      const data = await this.xApi.create(info);
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAll= async (req, res) => {
    try {
      const data = await this.xApi.getAll();
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAmount= async (req, res) => {
    try {
     const {amount}= req.params
      const data = await this.xApi.getAmount(amount)
      res.status(200).send({ message: data });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
}

export default XController;
