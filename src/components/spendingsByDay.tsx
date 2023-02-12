import styled from "styled-components";
import { Spending } from "../domain/accountBook/spending";
import dayjs from "dayjs";
import { KO_DAYS } from "../constants/koDays";

interface ISpendingByDayProp {
  spendDay: dayjs.Dayjs;
  daySpendings: Spending[];
}

export const SpendingsByDay = ({ spendDay, daySpendings }: ISpendingByDayProp) => {
  return (
    <Container>
      <DayHeader>{`${spendDay.format("MM월 DD일")} ${KO_DAYS[spendDay.day()]}요일`}</DayHeader>
      {daySpendings.length == 0 ? "" : daySpendings.map((spending) => <Row spending={spending} />)}
    </Container>
  );
};

const Row = ({ spending }: { spending: Spending }) => {
  return (
    <RowContainer>
      {spending.amount}
      {spending.description}
    </RowContainer>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 10px;
`;

const DayHeader = styled.div``;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
