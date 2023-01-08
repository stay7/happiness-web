import {atom, selector} from "recoil";
import {Spending} from "./spending";
import {selectedDateState} from "../calendar/calendarState";

export const allSpendingState = atom<Spending[]>({
    key: "all-spending-state",
    default: []
})

export const spendingByDayState = selector<Map<string, Spending[]>>({
    key: "spending-by-day-state",
    get: ({get}) => {
        const map = new Map<string, Spending[]>()
        get(allSpendingState).map(value => {
            if (map.get(value.spendAt)) {
                // @ts-ignore
                map.get(value.spendAt).push(value)
            } else {
                map.set(value.spendAt, [value])
            }
        })
        console.log('spendingByDayState', map)
        return map
    }
})

export const selectedDaySpendingState = selector<Spending[]>({
    key: "selected-day-spending-state",
    get: ({get}) => {
        const selectedDayString = get(selectedDateState).format('YYYYMMDD')
        const spendingByDay = get(spendingByDayState)

        return spendingByDay.get(selectedDayString) || []
    }
})

