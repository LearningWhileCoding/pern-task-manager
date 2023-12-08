import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default url;
