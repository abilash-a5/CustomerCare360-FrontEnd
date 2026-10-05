
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/customercare360/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;