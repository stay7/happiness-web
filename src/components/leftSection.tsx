import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { TAB_NAME } from "../state/uiState";
import { Tab } from "./Tab";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { selectedDateState } from "../state/calendarState";
import dayjs from "dayjs";
import { Profile } from "./profile/profile";

export const LeftSection = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  return (
    <Container>
      <Component>
        <Profile />
      </Component>

      <Component>
        {TAB_NAME.map((value, index) => (
          <Tab index={index} />
        ))}
      </Component>

      <Component>
        <DatePicker
          selected={selectedDate.toDate()}
          onChange={(date) => setSelectedDate(dayjs(date))}
          inline
        />
      </Component>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  min-width: 200px;
  background-color: #e2e2e2;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d4d4d4;
  width: 100%;
  align-items: center;
  padding: 10px 0;
`;
