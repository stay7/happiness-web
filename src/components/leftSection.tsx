import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { openRecordModalState, TAB_NAME } from "../state/uiState";
import { Tab } from "./Tab";

export const LeftSection = () => {
  const [_, setOpenModal] = useRecoilState(openRecordModalState);

  return (
    <Container>
      <Button onClick={() => setOpenModal(true)}>지출 추가</Button>
      {TAB_NAME.map((value, index) => (
        <Tab index={index} />
      ))}
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

const Button = styled.button`
  width: 180px;
  height: 30px;
  color: white;
  border: solid 0;
  text-align: center;
  background-color: #335beb;
  border-radius: 8px;
`;
