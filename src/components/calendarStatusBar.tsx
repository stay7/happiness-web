import React from 'react'
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {resetDayCountState, selectedDateState} from "../state/calendarState";

export const CalendarStatusBar = () => {
    const selectedDay = useRecoilValue(selectedDateState)
    const remainDays = useRecoilValue(resetDayCountState)

    return (
        <Container>
            <div>{selectedDay.format('MMMM')}</div>
            <div>예산 리셋일까지 {remainDays}일 남았어요</div>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  height: 100px;
`