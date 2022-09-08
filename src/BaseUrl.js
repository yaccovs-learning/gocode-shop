const { default: axios } = require("axios");
const BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "";

exports.BASE_URL = BASE_URL;

axios.defaults.baseURL = BASE_URL;
exports.axios = axios;
