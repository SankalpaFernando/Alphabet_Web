import axios from "axios";

export const BASE_URL = "http://localhost:5000";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});


export default api;