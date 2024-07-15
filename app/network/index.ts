import axios from "axios";
import { BASE_URL } from "../global.js";
const customerAxios = axios.create({
  baseURL: `${BASE_URL}`,
});

// Request interceptor for adding the bearer token
customerAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Accept = "*/*";
      config.headers.Accept = "*/*";
      config.headers.Authorization = `Bearer ${token}`;
    }
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

// Export the api instance
export default customerAxios;
