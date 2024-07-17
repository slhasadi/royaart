import axios from "axios";
import { BASE_URL } from "../global.js";
const customerAxios = axios.create({
  baseURL: `${BASE_URL}`,
});
const customerAxios2 = axios.create({
  baseURL: `https://dummyjson.com/`,
});

// Request interceptor for adding the bearer token
customerAxios.interceptors.request.use(
  (config) => {
    config.headers.Accept = "*/*";
    config.headers.mode = "no-cors";
    config.headers["Content-Type"] = "multipart/form-data";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API endpoints
export const getAllProduct = () => {
  return customerAxios.get(`GetAllProduct`);
};
export const getAllProductCategory = () => {
  return customerAxios.get(`GetAllProductCategory`);
};
export const getAllCatalog = () => {
  return customerAxios.get(`GetAllCatalog`);
};
export const getAllCatalogCategory = () => {
  return customerAxios.get(`GetAllCatalogCategory`);
};
export const getAllSlider = () => {
  return customerAxios.get(`GetAllSlider`);
};
export const getGalleryProduct = (id: number) => {
  return customerAxios.get(`GetGalleryProduct?ProductId=${id}`);
};
export const getGalleryCatalog = (id: number) => {
  return customerAxios.get(`GetGalleryCatalog?CatalogId=${id}`);
};
export const findProduct = (id: number) => {
  return customerAxios.post(`FindProduct?ProductId=${id}`);
};
export const findCatalog = (id: number) => {
  return customerAxios.get(`FindCatalog?CatalogId=${id}`);
};
export const getCatalogForPortfolio = () => {
  return customerAxios.get(`CatalogForPortfolio`);
};
export const registerContactUs = (data: any) => {
  return customerAxios.post(`RegisterContactUs`, data);
};
export const posts = () => {
  return customerAxios2.get(`products`);
};

// Export the api instance
export default customerAxios;
