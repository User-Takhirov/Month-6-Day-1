import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_URL
});

export { request };
