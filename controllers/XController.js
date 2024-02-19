import XApi from "../Api/XApi.js";

class XController {
  constructor() {
    this.xApi = new XApi();
  }
  
  
  create = async (req, res) => {
    try {

      const { info } = req.body;
      //if (!info) throw new Error("no hay info");
      const data = await this.xApi.create(info);
      res.status(200).send({ message: data });
   
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };





}

export default XController;
