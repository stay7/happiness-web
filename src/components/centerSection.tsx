import React from 'react';
import styled from "styled-components";
import HomeCalendar from "./homeCalendar";
import {CalendarStatusBar} from "./calendarStatusBar";

export const CenterSection = () => {

    return (
        <Container>
            <CalendarStatusBar />
            <HomeCalendar/>
        </Container>
    )
}

const Container = styled.div`
  flex: 3;
  background-color: #f1f1f1;
`