import axios, {AxiosError, AxiosResponse} from "axios";
import {ROUTE} from "../types";

const getLocalAccessToken = (): string => {
    const accessToken = window.localStorage.getItem("access_token");
    return accessToken || '';
}

const setLocalAccessToken = (token: string): void => {
    window.localStorage.setItem('access_token', token)
}

const getLocalRefreshToken = (): string => {
    const refreshToken = window.localStorage.getItem("refresh_token");
    return refreshToken || '';
}

const setLocalRefreshToken = (token: string): void => {
    window.localStorage.setItem('refresh_token', token)
}

const backendClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

backendClient.interceptors.request.use(config => {
        const token = getLocalAccessToken()
        if (config?.headers && token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }, {
        synchronous: true,
        runWhen: config => config.url !== ROUTE.LOGIN && config.url !== ROUTE.SIGNUP
    }
)

backendClient.interceptors.response.use(
    (res: AxiosResponse) => {
        return res;
    },
    async (err: AxiosError) => {
        const originalConfig = err.config;
        if (originalConfig.url !== ROUTE.LOGIN && err.response) {
            // Access Token was expired
            if (err.response.status === 401) {
                try {
                    const rs = await backendClient.post("/refresh-token", {
                        refreshToken: getLocalRefreshToken(),
                    });
                    const {token} = rs.data;
                    setLocalAccessToken(token);
                    return backendClient(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }, {
        synchronous: true,
        runWhen: config => config.url !== ROUTE.LOGIN && config.url !== ROUTE.SIGNUP
    }
);

export {backendClient}