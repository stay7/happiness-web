import axios from "axios";
import {STORAGE_KEY_PREFIX} from "../hooks/useLocalStorage";

const happinessClient = axios.create(
    {
        baseURL: "http://localhost:8080",
        headers: {
            'Accept': "application/json, text/html",
            'Content-Type': "application/json",
        }
    }
)

happinessClient.interceptors.request.use(
    config => {
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

export default happinessClient