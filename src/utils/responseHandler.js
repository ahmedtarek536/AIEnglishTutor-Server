const successResponse = (res, message = "Success", data = {}, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (
  res,
  message = "Error occurred",
  status = 500,
  errors = []
) => {
  return res.status(status).json({
    success: false,
    message,
    statusCode: status,
    errors,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
