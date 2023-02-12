import { AxiosInstance } from "axios";
import happinessClient from "../utils/happinessClient";
import { Spending } from "../domain/accountBook/spending";

export class SpendingStore {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async all(accountBookId: number): Promise<IAllSpendingsResponse> {
    const data = { accountBookId: accountBookId };
    const response = await this.client.post<IAllSpendingsResponse>("/spending/all", data);
    console.log(response);
    return response.data;
  }

  async record(form: IRecordForm): Promise<IRecordResponse> {
    const response = await this.client.post<IRecordResponse>("/record", form);
    return response.data;
  }
}

export interface IRecordForm {
  accountBookId: number;
  amount: number;
  spendAt: string;
  description: string | null;
  categoryId: number;
  paymentId: number;
}

interface IRecordResponse {
  status: number;
}

interface IAllSpendingsResponse {
  spendings: Spending[];
  status: number;
}

export const spendingStore = new SpendingStore(happinessClient);
