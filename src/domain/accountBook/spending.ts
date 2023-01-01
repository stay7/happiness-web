export type Spending = {
    amount: number
    spendAt: string
    categoryId: number
    subCatgoryId: number | null
    paymentId: number
    description: string
    currency: string
}