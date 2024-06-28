import axios from "axios";

export const instance = axios.create({
  baseURL: "https://nettle-pond-red.glitch.me/",
});
