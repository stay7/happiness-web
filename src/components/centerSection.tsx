import React from 'react';
import styled from "styled-components";
import HomeCalendar from "./homeCalendar";
import {CalendarStatusBar} from "./calendarStatusBar";
import {AddSpendingModal} from "./addSpendingModal";
import {SummaryThisMonthBar} from "./summaryThisMonthBar";
import {useRecoilValue} from "recoil";
import {thisMonthSpendings} from "../state/allSpendingState";

export const CenterSection = () => {
    const thisMonthSpending = useRecoilValue(thisMonthSpendings)

    return (
        <Container>
            <AddSpendingModal/>
            <CalendarStatusBar/>
            <SummaryThisMonthBar budgets={[]} spendings={thisMonthSpending} incomes={[]}/>
            <HomeCalendar/>
        </Container>
    )
}

const Container = styled.div`
  flex: 3;
  background-color: #f1f1f1;
`