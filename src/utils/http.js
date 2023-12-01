import axios from "axios";

export const $authHost = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});
$authHost.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers["x-auth-token"] = token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

$authHost.interceptors.response.use(
    async (response) => {
        return response;
    },
    async function (error) {
        return Promise.reject(error);
    }
);
