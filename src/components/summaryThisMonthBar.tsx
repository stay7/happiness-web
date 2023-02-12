import styled from "styled-components";
import { Budget } from "../domain/accountBook/budget";
import { Spending } from "../domain/accountBook/spending";
import { AmountForamtter } from "../utils/amountForamtter";
import { Income } from "../domain/accountBook/income";

// 선택된 날짜에 해당하는 월의 budgets, spendings
interface ISummaryProps {
  budgets: Budget[];
  spendings: Spending[];
  incomes: Income[];
}

export const SummaryThisMonthBar = ({ budgets, spendings, incomes }: ISummaryProps) => {
  const formatter = AmountForamtter.getInstance();
  const totalSpendingAmount = spendings.reduce((partialSum, value) => partialSum + value.amount, 0);

  return (
    <Container>
      <Item>
        <Label>남은 금액</Label>
        <span style={{ fontWeight: "bold" }}>{formatter.numberToString(0)}</span>
      </Item>
      <Item>
        <Label>총지출</Label>
        {formatter.numberToString(totalSpendingAmount)}
      </Item>
      <Item>
        <Label>수입</Label>
        {formatter.numberToString(0)}
      </Item>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  padding: 0 10px;
`;

const Label = styled.span`
  padding-right: 10px;
`;
