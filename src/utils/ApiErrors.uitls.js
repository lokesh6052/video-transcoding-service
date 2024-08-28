class ApiErrors extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    Errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.Errors = Errors;
    this.data = null;
    this.success = false;
    this.message = message;

    if (stack) {
      this.stack = stack;
    } else {
      Errors.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiErrors };
