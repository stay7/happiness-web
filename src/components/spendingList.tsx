import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { thisMonthSpendingsByDayState } from "../state/spendingState";
import { SpendingsByDay } from "./spendingsByDay";
import dayjs from "dayjs";
import { selectedDateState } from "../state/calendarState";

interface ISpendingListProp {}

export const SpendingList = ({}: ISpendingListProp) => {
  const daysInMonth = allDaysInMonth(useRecoilValue(selectedDateState));
  const spendings = useRecoilValue(thisMonthSpendingsByDayState);

  console.log(daysInMonth.map((value) => value.format("YYYYMMDD")));

  return (
    <Container>
      {daysInMonth.map((value) => (
        <SpendingsByDay
          spendDay={value}
          daySpendings={spendings.get(value.format("YYYYMMDD")) || []}
        />
      ))}
    </Container>
  );
};

function allDaysInMonth(day: dayjs.Dayjs): dayjs.Dayjs[] {
  const [year, month] = [day.year(), day.month()];
  const out = [];
  for (let i = 1; i <= day.daysInMonth(); i++) {
    out.push(dayjs().set("year", year).set("month", month).set("date", i));
  }
  return out;
}

const Container = styled.div``;
