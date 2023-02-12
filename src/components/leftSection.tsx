import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { openRecordModalState, TAB_NAME } from "../state/uiState";
import { Tab } from "./Tab";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { selectedDateState } from "../state/calendarState";
import dayjs from "dayjs";

export const LeftSection = () => {
  const [_, setOpenModal] = useRecoilState(openRecordModalState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  return (
    <Container>
      <Button onClick={() => setOpenModal(true)}>지출 추가</Button>
      <LeftSectionComponent>
        {TAB_NAME.map((value, index) => (
          <Tab index={index} />
        ))}
      </LeftSectionComponent>

      <LeftSectionComponent>
        <DatePicker
          selected={selectedDate.toDate()}
          onChange={(date) => setSelectedDate(dayjs(date))}
          inline
        />
      </LeftSectionComponent>
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

const LeftSectionComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d4d4d4;
  width: 100%;
  align-items: center;
  padding: 10px 0;
`;

const Button = styled.button`
  width: 180px;
  height: 30px;
  color: white;
  border: solid 0;
  text-align: center;
  background-color: #335beb;
  border-radius: 8px;
`;
