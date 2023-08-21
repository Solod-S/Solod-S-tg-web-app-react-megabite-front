import axios from "axios";

const { REACT_APP_GOOGLE_SHEET_DB } = process.env;

export const axiosInstance = axios.create({
  baseURL: REACT_APP_GOOGLE_SHEET_DB,
});
