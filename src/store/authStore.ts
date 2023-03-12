import { AxiosInstance } from "axios";
import happinessClient from "../utils/happinessClient";

export class AuthStore {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async signup(form: ISignupForm): Promise<ISignupData> {
    const data = {
      nickname: form.nickname,
      email: form.email,
      lang: form.lang,
      socialProvider: form.socialProvider,
    };
    try {
      const response = await this.client.post<ISignupData>("/oauth/signup", JSON.stringify(data));
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async login(): Promise<ILoginData> {
    try {
      const response = await this.client.get("/login");
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

interface ILoginData {
  user: ILoginUser;
}

interface ILoginUser {
  id: number;
  email: string;
  nickname: string;
}

interface ISignupForm {
  nickname: string;
  email: string;
  lang: string;
  socialProvider: string;
}

interface ISignupData {
  accessToken: string;
  refreshToken: string;
  status: number;
}

const authStore = new AuthStore(happinessClient);
export default authStore;
