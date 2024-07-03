import axios from "axios";

export const instance = axios.create({
  baseURL: "http://95.163.221.194:5000/requests",
});
