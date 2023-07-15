//this error comes from asyncWrapper , it is not handled there, if not handled here, it will
//automatically be handled by express
const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: err });
};
module.exports = errorHandlerMiddleware;
