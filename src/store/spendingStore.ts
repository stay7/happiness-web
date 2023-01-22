import {AxiosInstance} from "axios";
import happinessClient from "../utils/happinessClient";
import {Spending} from "../domain/accountBook/spending";

export class SpendingStore {
    client: AxiosInstance;


    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async all(accountBookId: number): Promise<IAllSpendingsResponse> {
        const data = {"accountBookId": accountBookId}
        const response = await this.client.post<IAllSpendingsResponse>("/spending/all", data)
        console.log(response)
        return response.data
    }

}

interface IAllSpendingsResponse {
    spendings: Spending[],
    status: number
}

export const spendingStore = new SpendingStore(happinessClient)