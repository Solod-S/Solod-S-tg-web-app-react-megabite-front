import axios from "axios";

const {
  REACT_APP_GOOGLE_DEALS_SHEET_DB,
  REACT_APP_GOOGLE_FORM_SHEET_DB,
  REACT_APP_GOOGLE_PROMO_SHEET_DB,
  REACT_APP_GOOGLE_SHEET_TOKEN,
} = process.env;

export const axiosDealsInstance = axios.create({
  baseURL: REACT_APP_GOOGLE_DEALS_SHEET_DB,
});

export const axiosPromoInstance = axios.create({
  baseURL: REACT_APP_GOOGLE_PROMO_SHEET_DB,
});

export const axiosFormInstance = axios.create({
  baseURL: REACT_APP_GOOGLE_FORM_SHEET_DB,
});

const addTokenToRequest = (config) => {
  config.headers.Authorization = `Bearer ${REACT_APP_GOOGLE_SHEET_TOKEN}`;
  return config;
};

axiosDealsInstance.interceptors.request.use(addTokenToRequest);
axiosPromoInstance.interceptors.request.use(addTokenToRequest);
axiosFormInstance.interceptors.request.use(addTokenToRequest);
