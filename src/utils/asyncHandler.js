const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      res.status(500).json({
        status: "failed",
        message: "Something went wrong!",
      });
    });
  };
};

export default asyncHandler;
