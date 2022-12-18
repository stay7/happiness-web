/*
interface AccountBook {
    id: number,
    title: string,
    startDay: number,
    payments: Payment[]
    categories: Category[]
}
 */

import {Category} from "./category";
import {Payment} from "./payment";

export class AccountBook {
    id: number
    title: string
    startDay: number
    payments: Payment[]
    categories: Category[]

    constructor(id: number, title: string, startDay: number, payments: Payment[], categories: Category[]) {
        this.id = id;
        this.title = title;
        this.startDay = startDay;
        this.payments = payments;
        this.categories = categories;
    }
}