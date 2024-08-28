class ApiResponse {
  constructor(statusCode, message = "success", data) {
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode >= 200 && statusCode < 300;
    this.message = message;
  }
}

export { ApiResponse };
