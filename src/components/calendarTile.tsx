import React from "react";
import { CalendarTileProperties } from "react-calendar";
import { useRecoilValue } from "recoil";
import { spendingByDayState } from "../state/spendingState";
import dayjs from "dayjs";
import { CalendarTileSpendings } from "./calendarTileSpendings";
import styled from "styled-components";

interface CalendarTileProp extends CalendarTileProperties {}

export const CalendarTile = ({ activeStartDate, view, date }: CalendarTileProp) => {
  const dateSpending = useRecoilValue(spendingByDayState);
  const tileDay = dayjs(date);
  return (
    <Container>
      {dateSpending.get(tileDay.format("YYYYMMDD"))?.map((value) => (
        <CalendarTileSpendings spending={value} />
      ))}
    </Container>
  );
};

// 날짜 숫자 밑 공간
const Container = styled.div`
  flex: 1;
  padding: 0 7px;
  margin: 0.5px;
`;
