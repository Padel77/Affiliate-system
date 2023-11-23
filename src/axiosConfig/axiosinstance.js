import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://wp.tamrina.com"
})

export default axiosInstance;