class XApi {
  constructor() {
    this.memory = [];
  }

  create = async (info) => {
    try {
      this.memory.push(info);
      return await info;
    } catch (error) {
      throw error;
    }
  };
}

export default XApi;
