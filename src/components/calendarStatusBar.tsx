import React, {useState} from 'react'
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {resetDaySettingState} from "../domain/settings/settingsState";
import {resetDayCountState, todayState} from "../domain/calendar/calendarState";

export const CalendarStatusBar = () => {
    const today = useRecoilValue(todayState)
    const remainDays = useRecoilValue(resetDayCountState)

    return (
        <Container>
            <div>{today.format('MMMM')}</div>
            <div>예산 리셋일까지 {remainDays}일 남았어요</div>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  height: 100px;
`