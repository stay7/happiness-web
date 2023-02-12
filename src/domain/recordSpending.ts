import { Category } from "./accountBook/category";
import { Payment } from "./accountBook/payment";
import dayjs from "dayjs";
import { spendingStore } from "../store/spendingStore";
import { AccountBook } from "./accountBook/accountBook";

interface IRecordSpending {
  accountBook: AccountBook | null;
  date: dayjs.Dayjs;
  amount: number | undefined;
  category: Category | undefined;
  payment: Payment | undefined;
  content: string | undefined;
}

export const recordSpending = async ({
  accountBook,
  date,
  amount,
  category,
  content,
  payment,
}: IRecordSpending) => {
  if (
    accountBook == null ||
    amount == undefined ||
    date == undefined ||
    payment == undefined ||
    category == undefined
  )
    return;

  if (amount < 0) return;

  await spendingStore.record({
    accountBookId: accountBook.id,
    amount: amount,
    categoryId: category.id,
    description: content || null,
    paymentId: payment.id,
    spendAt: date.format("YYYYMMDD"),
  });
};
