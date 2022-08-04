import axios from "axios";
import { getToken, isLoggedIn, updateToken } from "./userService";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

const axiosInstanse = axios.create();

const configureAxios = () => {
    axiosInstanse.interceptors.request.use((config) => {
        if (isLoggedIn()) {
            const cb = () => {
                config.headers.Authorization = `Bearer ${getToken()}`;
                return Promise.resolve(config);
            };
            return updateToken(cb);
        }
    });
};

const getAxiosClient = () => axiosInstanse;


export {
    HttpMethods,
    configureAxios,
    getAxiosClient,
};;