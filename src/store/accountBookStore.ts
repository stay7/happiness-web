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

    async record(form: IRecordForm): Promise<IRecordResponse> {
        const response = await this.client.post<IRecordResponse>("/record", form)
        return response.data
    }
}

interface IAccountBookAllResponse {
    accountBooks: AccountBook[]
}

interface IRecordResponse {
    status: number
}

export interface IRecordForm {
    accountBookId: number,
    amount: number,
    spendAt: string,
    description: string,
    categoryId: number,
    paymentId: number
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