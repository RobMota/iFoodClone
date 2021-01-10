import axios from "axios";

const api = axios.create({
  baseURL: "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db",
});

export default api;
