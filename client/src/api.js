import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // your backend URL
  withCredentials: true, // for cookies, if you use them
});

export default api;
