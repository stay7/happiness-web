import {AxiosInstance} from "axios";
import {happinessClient} from "../../utils/happinessClient";

export class AuthStore {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async signup(): Promise<ISignupData> {
        const data = {
            "providerId": "1235",
            "email": "sangmin95@gmail.com",
            "emailVerified": false,
            "deviceUuid": "1234",
            "lang": "ko"
        }
        try {
            const response = await this.client.post<ISignupData>("/oauth/signup/kakao", JSON.stringify(data))
            return response.data
        } catch (e) {
            throw e
        }
    }
}

interface ISignupData {
    accessToken: string,
    refreshToken: string,
    status: number
}

const authStore = new AuthStore(happinessClient)
export default authStore
