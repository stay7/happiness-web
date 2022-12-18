export class Category {
    id: number
    name: string
    subCategories: SubCateogry[]
    
    constructor(id: number, name: string, subCategories: SubCateogry[]) {
        this.id = id;
        this.name = name;
        this.subCategories = subCategories;
    }
}

export class SubCateogry {

}