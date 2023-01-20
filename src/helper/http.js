import axios from "axios";

const http = (token) => {
  const header = {};
  if (token) {
    header.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: "http://localhost:8888",
    header,
  });
  return instance;
};

export default http;
