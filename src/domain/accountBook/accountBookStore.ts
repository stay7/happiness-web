import {AxiosInstance} from "axios";
import happinessClient from "../../utils/happinessClient";
import {AccountBook} from "./accountBook";

export class AccountBookStore {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async all(): Promise<IAllData> {
        const response = await this.client.get<IAllData>("/account_book/all")
        return response.data
    }
}

interface IAllData {
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