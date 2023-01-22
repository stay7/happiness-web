import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {selectedAccountBookState} from "../state/accountBookState";
import {Calendar, OnChangeDateCallback} from "react-calendar";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import '../main-calendar.css'
import {selectedDateState} from "../state/calendarState";
import {CalendarTile} from "./calendarTile";
import {allSpendingState} from "../state/allSpendingState";

type Props = {}

const HomeCalendar: React.FC<Props> = () => {
    const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState)
    const selectedAccountBook = useRecoilValue(selectedAccountBookState)
    const navigate = useNavigate()
    const [] = useRecoilValue(allSpendingState)
    const onChangeDateCallback: OnChangeDateCallback = (value) => {
        setSelectedDate(dayjs(value))
    }
    const koDays = ['일', '월', '화', '수', '목', '금', '토']

    return (
        <>
            <Calendar
                className="main-calendar"
                defaultView="month"
                view="month"
                showNavigation={false}
                onChange={onChangeDateCallback}
                formatShortWeekday={(locale, date) => koDays[date.getDay()]}
                tileClassName="main-tile"
                tileContent={
                    ({activeStartDate, date, view}) =>
                        <CalendarTile
                            activeStartDate={activeStartDate}
                            date={date}
                            view={view}
                        />
                }
                value={selectedDate.toDate()}/>
        </>
    )
}

export default HomeCalendar