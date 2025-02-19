import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_SERVER,
  headers: {
    key: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
});

export const url = process.env.NEXT_PUBLIC_URL_SERVER;
