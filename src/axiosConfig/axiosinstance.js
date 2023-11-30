import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://manf3a.infinitybridge.org"
    // baseURL : "https://wp.tamrina.com"
})

export default axiosInstance;