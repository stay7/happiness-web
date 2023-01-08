import React from 'react'
import {CalendarTileProperties} from "react-calendar";
import {useRecoilValue} from "recoil";
import {spendingByDayState} from "../domain/accountBook/allSpendingState";
import dayjs from "dayjs";
import {SpendingRow} from "./spendingRow";
import styled from "styled-components";

interface CalendarTileProp extends CalendarTileProperties {

}

export const CalendarTile = ({activeStartDate, view, date}: CalendarTileProp) => {
    const dateSpending = useRecoilValue(spendingByDayState)
    const tileDay = dayjs(date)
    return (
        <Container>{
            dateSpending.get(tileDay.format('YYYYMMDD'))?.map(value => <SpendingRow spending={value}/>)
        }</Container>
    )
}

const Container = styled.div`
  height: 75px;
  max-height: 75px;
  padding: 0 7px;
  margin: 0.5px;
`