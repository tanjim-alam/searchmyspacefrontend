import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1";

// const BASE_URL = "https://searchmyspacebackend-production.up.railway.app/api/v1";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance