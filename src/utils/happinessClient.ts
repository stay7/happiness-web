import axios from "axios";
import { STORAGE_KEY_PREFIX } from "../hooks/useLocalStorage";
import { HAPPINESS_STATUS_CODE } from "../constants/HAPPINESS_STATUS_CODE";
import { HTTP_STATUS_CODE } from "../constants/httpStatusCode";

const baseUrl = process.env["REACT_APP_BASE_URL"];

const happinessClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json, text/html",
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem(STORAGE_KEY_PREFIX + "accessToken")!}`,
  },
});

const pureClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json, text/html",
    "Content-Type": "application/json",
  },
});

happinessClient.interceptors.request.use((config) => {
  return config;
});

happinessClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error &&
      error.response.status == HTTP_STATUS_CODE.UNAUTHORIZED &&
      error.response.data.status == HAPPINESS_STATUS_CODE.UNAUTHORIZED
    ) {
      const storageRefreshToken = localStorage.getItem(STORAGE_KEY_PREFIX + "refreshToken");
      if (storageRefreshToken) {
        const response = await pureClient.post<IRefreshResponse>(`${baseUrl}/oauth/refresh`, {
          refreshToken: storageRefreshToken,
        });
        const { accessToken, refreshToken } = response.data;
        if (accessToken && refreshToken) {
          localStorage.setItem(STORAGE_KEY_PREFIX + "accessToken", accessToken);
          localStorage.setItem(STORAGE_KEY_PREFIX + "refreshToken", refreshToken);
        }
      }
    } else {
      return error.response;
    }
  }
);

interface IRefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export default happinessClient;
