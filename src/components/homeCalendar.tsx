import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {selectedAccountBookState} from "../domain/accountBook/accountBookState";
import {Calendar, OnChangeDateCallback} from "react-calendar";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import '../main-calendar.css'
import {selectedDateState} from "../domain/calendar/calendarState";

type Props = {}

const HomeCalendar: React.FC<Props> = () => {
    const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState)
    const selectedAccountBook = useRecoilValue(selectedAccountBookState)
    const navigate = useNavigate()
    const onChangeDateCallback: OnChangeDateCallback = (value) => {
        setSelectedDate(dayjs(value))
    }

    return (
        <>
            <div>{selectedAccountBook?.title}</div>
            <Calendar
                className="main-calendar"
                defaultView="month"
                view="month"
                onChange={onChangeDateCallback}
                tileClassName="main-tile"
                value={selectedDate.toDate()}/>

            <Button
                variant="contained"
                onClick={() => {
                    navigate("/record")
                }}
            >
                add
            </Button>
        </>
    )
}

export default HomeCalendar