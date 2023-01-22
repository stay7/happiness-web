import React from 'react';
import styled from "styled-components";
import HomeCalendar from "./homeCalendar";
import {CalendarStatusBar} from "./calendarStatusBar";
import {AddSpendingModal} from "./addSpendingModal";

export const CenterSection = () => {

    return (
        <Container>
            <AddSpendingModal />
            <CalendarStatusBar />
            <HomeCalendar/>
        </Container>
    )
}

const Container = styled.div`
  flex: 3;
  background-color: #f1f1f1;
`