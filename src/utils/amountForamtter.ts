export class AmountForamtter {
    private static instance: AmountForamtter
    removeCommaRegex = /[^\d]+/g
    concatCommaRegex = /(\d)(?=(?:\d{3})+(?!\d))/g

    private constructor() {
    }

    public static getInstance() {
        return this.instance || (this.instance = new this())
    }

    numberToString(amount: number): string {
        return amount.toString().replace(this.concatCommaRegex, "$1,")
    }

    stringToNumber(amount: String): number {
        return parseInt(amount.replaceAll(this.removeCommaRegex, ""))
    }
}