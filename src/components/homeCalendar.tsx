import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Calendar, OnChangeDateCallback } from "react-calendar";
import dayjs from "dayjs";
import "../main-calendar.css";
import { selectedDateState } from "../state/calendarState";
import { CalendarTile } from "./calendarTile";
import { allSpendingState } from "../state/spendingState";

type Props = {};

const HomeCalendar: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState);
  const [] = useRecoilValue(allSpendingState);
  const onChangeDateCallback: OnChangeDateCallback = (value) => {
    setSelectedDate(dayjs(value));
  };
  const koDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <Calendar
        className="main-calendar"
        defaultView="month"
        view="month"
        locale="en-US"
        showNavigation={false}
        onChange={onChangeDateCallback}
        formatWeekday={(locale, date) => koDays[date.getDay()]}
        tileClassName="main-tile"
        tileContent={({ activeStartDate, date, view }) => (
          <CalendarTile activeStartDate={activeStartDate} date={date} view={view} />
        )}
        value={selectedDate.toDate()}
      />
    </>
  );
};

export default HomeCalendar;
