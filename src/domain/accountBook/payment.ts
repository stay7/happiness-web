export class Payment {
    id: number
    name: string
    isCard: boolean

    constructor(id: number, name: string, isCard: boolean) {
        this.id = id;
        this.name = name;
        this.isCard = isCard;
    }
}