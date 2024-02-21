const generalError = (req, res, next) => {
  res.status(404).send("Libro no encontrado.");
};

export default generalError;
