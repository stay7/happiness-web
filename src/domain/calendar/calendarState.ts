import {atom, selector} from "recoil";
import dayjs from "dayjs";
import {resetDaySettingState} from "../settings/settingsState";

export const todayState = atom<dayjs.Dayjs>({
    key: "today-state",
    default: dayjs()
})

export const selectedDateState = atom<dayjs.Dayjs>({
    key: "selected-date-state",
    default: dayjs()
})

export const resetDayState = selector<dayjs.Dayjs>({
    key: "reset-day-state",
    get: ({get}) => {
        const today = get(todayState)
        const resetDaySetting = get(resetDaySettingState)
        return today.date() > resetDaySetting
            ? today.month(today.month() + 1).date(resetDaySetting)
            : today.date(resetDaySetting)
    }
})

export const resetDayCountState = selector<number>({
    key: "reset-day-count",
    get: ({get}) => {
        const today = get(todayState)
        const resetDay = get(resetDayState)
        return resetDay.diff(today, 'day')
    }
})