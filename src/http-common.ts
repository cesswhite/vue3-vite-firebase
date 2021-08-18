import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://dark-side-of-the-moon.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    // "Access-Control-Allow-Headers":
    //   "Origin, Content-Type, Accept, Authorization, X-Request-With",
  },
});

export default apiClient;
