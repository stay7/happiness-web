import { atom, selector } from "recoil";
import { Spending } from "../domain/accountBook/spending";
import { selectedDateState } from "./calendarState";

export const allSpendingState = atom<Spending[]>({
  key: "all-spending-state",
  default: [],
});

export const spendingByDayState = selector<Map<string, Spending[]>>({
  key: "spending-by-day-state",
  get: ({ get }) => {
    const map = new Map<string, Spending[]>();
    get(allSpendingState).map((value) => {
      if (map.get(value.spendAt)) {
        // @ts-ignore
        map.get(value.spendAt).push(value);
      } else {
        map.set(value.spendAt, [value]);
      }
    });
    console.log("spendingByDayState", map);
    return map;
  },
});

export const selectedDaySpendingsState = selector<Spending[]>({
  key: "selected-day-spending-state",
  get: ({ get }) => {
    const selectedDayString = get(selectedDateState).format("YYYYMMDD");
    const spendingByDay = get(spendingByDayState);

    return spendingByDay.get(selectedDayString) || [];
  },
});

export const thisMonthSpendingsState = selector<Spending[]>({
  key: "this-month-spendings-state",
  get: ({ get }) => {
    const selectedMonth = get(selectedDateState).format("YYYYMM");
    return get(allSpendingState).filter((value) => value.spendAt.substring(0, 6) == selectedMonth);
  },
});

export const thisMonthSpendingsByDayState = selector<Map<string, Spending[]>>({
  key: "this-month-spendings-by-day-state",
  get: ({ get }) => {
    const map = new Map<string, Spending[]>();
    get(thisMonthSpendingsState).forEach((value) => {
      const key = value.spendAt;
      if (map.get(key)) {
        // @ts-ignore
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    });
    return map;
  },
});
