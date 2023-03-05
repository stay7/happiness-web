import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import dayjs from "dayjs";
import "../main-calendar.css";
import { selectedDateState } from "../state/calendarState";
import { allSpendingState } from "../state/spendingState";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar/calendar.scss";

type Props = {};

const HomeCalendar: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState);
  const [] = useRecoilValue(allSpendingState);

  const koDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const localizer = dayjsLocalizer(dayjs);

  // @ts-ignore
  return (
    <>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
      />
    </>
  );
};

export default HomeCalendar;
