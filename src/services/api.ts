import axios from "axios";

const api = axios.create({
  baseURL: "https://musical-auction.herokuapp.com",
  timeout: 5000,
});

export default api;
