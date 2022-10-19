import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9060/api",
  headers: {
    "Content-type": "application/json"
  }
});