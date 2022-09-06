import axios from "axios";

export const api = axios.create({
  baseURL: "https://musical-auction.herokuapp.com",
  timeout: 5000,
});
