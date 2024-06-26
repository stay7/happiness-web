import React from "react";
import styled from "styled-components";
import HomeCalendar from "./homeCalendar";
import { CalendarStatusBar } from "./calendarStatusBar";
import { AddSpendingModal } from "./modal/addSpendingModal";
import { SummaryThisMonthBar } from "./summaryThisMonthBar";
import { useRecoilValue } from "recoil";
import { thisMonthSpendingsState } from "../state/spendingState";

export const CenterSection = () => {
  const thisMonthSpending = useRecoilValue(thisMonthSpendingsState);

  return (
    <Container>
      <CalendarStatusBar />
      <SummaryThisMonthBar
        budgets={[]}
        spendings={thisMonthSpending}
        incomes={[]}
      />
      <HomeCalendar />
    </Container>
  );
};

const Container = styled.div`
  flex: 3;
  background-color: #f1f1f1;
`;
