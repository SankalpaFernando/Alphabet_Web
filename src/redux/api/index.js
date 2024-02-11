import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_API;;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});


export default api;