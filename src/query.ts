import { AccountBook } from "./domain/accountBook/accountBook";
import { Category } from "./domain/accountBook/category";

export function findCategoryById(accountBook: AccountBook, id: number) {
  return accountBook.categories.find((value) => value.id == id)!!;
}

export function findSubCategoryById(category: Category, id: number) {
  return category.subCategories.find((value) => value.id == id)!!;
}

export function findPaymentById(accountBook: AccountBook, id: number) {
  return accountBook.payments.find((value) => value.id == id)!!;
}
