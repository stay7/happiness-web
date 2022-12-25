import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {selectedAccountBookState} from "../domain/accountBook/accountBookState";
import Calendar, {OnChangeDateCallback} from "react-calendar";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {selectedDateState} from "../domain/date/dateState";
import dayjs from "dayjs";

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
            <Calendar onChange={onChangeDateCallback} value={selectedDate.toDate()}/>
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