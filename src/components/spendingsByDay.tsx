import styled from "styled-components";
import { Spending } from "../domain/accountBook/spending";
import dayjs from "dayjs";
import { KO_DAYS } from "../constants/koDays";
import { Category, SubCateogry } from "../domain/accountBook/category";
import { findCategoryById, findPaymentById, findSubCategoryById } from "../query";
import { useRecoilValue } from "recoil";
import { selectedAccountBookState } from "../state/accountBookState";
import { Payment } from "../domain/accountBook/payment";
import { AmountForamtter } from "../utils/amountForamtter";

interface ISpendingByDayProp {
  spendDay: dayjs.Dayjs;
  daySpendings: Spending[];
}

export const SpendingsByDay = ({ spendDay, daySpendings }: ISpendingByDayProp) => {
  const accountBook = useRecoilValue(selectedAccountBookState)!!;
  if (daySpendings.length == 0) return <></>;

  return (
    <Container>
      <DayHeader>{`${spendDay.format("MM월 DD일")} ${KO_DAYS[spendDay.day()]}요일`}</DayHeader>
      {daySpendings.map((spending) => {
        const category = findCategoryById(accountBook, spending.categoryId);
        const payment = findPaymentById(accountBook, spending.paymentId);

        return (
          <Row
            spending={spending}
            category={category}
            payment={payment}
          />
        );
      })}
    </Container>
  );
};

const Row = ({ spending, category, payment }: { spending: Spending; category: Category; payment: Payment }) => {
  return (
    <div>
      <SpaceBeetween>
        <span>
          <span>{category.name}</span>
          {spending.subCatgoryId && <span>{findSubCategoryById(category, spending.subCatgoryId).name}</span>}
        </span>
        {payment.name}
      </SpaceBeetween>
      <SpaceBeetween>
        <span style={{ fontSize: 14, fontWeight: "bold" }}>{spending.description}</span>
        <span>{AmountForamtter.getInstance().numberToString(spending.amount)}</span>
      </SpaceBeetween>
    </div>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 10px;
`;

const DayHeader = styled.div``;

const SpaceBeetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
