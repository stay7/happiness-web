import { AxiosInstance } from "axios";
import happinessClient from "../utils/happinessClient";
import { AccountBook } from "../domain/accountBook/accountBook";
import { HTTP_STATUS_CODE } from "../constants/httpStatusCode";
import { HappinessResponse } from "../utils/CommonTypes";
import { HAPPINESS_STATUS_CODE } from "../constants/HAPPINESS_STATUS_CODE";

export class AccountBookStore {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async all(): Promise<IAccountBookAllResponse> {
    const response = await this.client.get<IAccountBookAllResponse>("/account_book/all");
    if (response.status != HTTP_STATUS_CODE.OK || response.data.status != HAPPINESS_STATUS_CODE.OK) {
      console.log("error", response.data);
    }
    console.log("get all account book", response);
    return response.data;
  }
}

interface IAccountBookAllResponse extends HappinessResponse {
  accountBooks: AccountBook[];
}

// interface AccountBook {
//     id: number,
//     title: string,
//     startDay: number,
//     payments: Payment[]
//     categories: Category[]
// }
//
// interface Category {
//     id: number
//     name: string
//     subCategories: SubCategory[]
//
// }
//
// interface SubCategory {
//     id: number
//     name: string
// }
//
// interface Payment {
//     id: number
//     name: string
//     isCard: boolean
// }

export const accountBookStore = new AccountBookStore(happinessClient);
