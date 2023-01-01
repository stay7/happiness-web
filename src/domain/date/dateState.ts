import {atom} from "recoil";
import dayjs from "dayjs";

export const todayState = atom<dayjs.Dayjs>({
    key: "today",
    default: dayjs()
})

export const selectedDateState = atom<dayjs.Dayjs>({
    key: "selectedDate",
    default: dayjs()
})