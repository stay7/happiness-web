import {AxiosInstance} from "axios";
import happinessClient from "../utils/happinessClient";
import {AccountBook} from "../domain/accountBook/accountBook";

export class AccountBookStore {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async all(): Promise<IAccountBookAllResponse> {
        const response = await this.client.get<IAccountBookAllResponse>("/account_book/all")
        console.log('get all account book', response.data)
        return response.data
    }
}

interface IAccountBookAllResponse {
    accountBooks: AccountBook[]
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

export const accountBookStore = new AccountBookStore(happinessClient)