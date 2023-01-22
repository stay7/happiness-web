import axios from "axios";
import {STORAGE_KEY_PREFIX} from "../hooks/useLocalStorage";

const baseUrl = "http://localhost:8080"

const happinessClient = axios.create(
    {
        baseURL: baseUrl,
        headers: {
            'Accept': "application/json, text/html",
            'Content-Type': "application/json",
        }
    }
)

const pureClient = axios.create(
    {
        baseURL: baseUrl,
        headers: {
            'Accept': "application/json, text/html",
            'Content-Type': "application/json",
        }
    }
)

happinessClient.interceptors.request.use(
    config => {
        console.log(localStorage.getItem(STORAGE_KEY_PREFIX + "accessToken"))
        const storageAccessToken = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + "accessToken")!)
        if (storageAccessToken) {
            console.log(storageAccessToken)
            // @ts-ignore
            config.headers["Authorization"] = storageAccessToken
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

happinessClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log('error', error)
        if (error && error.response.status == 401 && error.response.data.status == -401) {
            const storageRefreshToken = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + "refreshToken")!)
            if (storageRefreshToken) {
                const response = await pureClient.post<IRefreshResponse>(`${baseUrl}/oauth/refresh`, {
                    "refreshToken": storageRefreshToken
                })
                const {accessToken, refreshToken} = response.data
                if (accessToken && refreshToken) {
                    localStorage.setItem(STORAGE_KEY_PREFIX + "accessToken", accessToken)
                    localStorage.setItem(STORAGE_KEY_PREFIX + "refreshToken", refreshToken)
                }
            } else {
                // TODO: login 페이지로 이동
            }
        } else {
            return Promise.reject(error)
        }
    }
)

interface IRefreshResponse {
    accessToken: string,
    refreshToken: string
}

export default happinessClient