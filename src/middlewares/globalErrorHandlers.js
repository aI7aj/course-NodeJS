const globalErrorHandler = (err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
};

export default globalErrorHandler;