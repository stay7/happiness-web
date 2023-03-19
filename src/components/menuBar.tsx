import React from "react";
import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { openRecordModalState } from "../state/uiState";
import { thisMonthSpendingSum } from "../state/spendingState";

export function MenuBar() {
  const [_, setOpenModal] = useRecoilState(openRecordModalState);
  const spendingSum = useRecoilValue(thisMonthSpendingSum);

  return (
    <Container>
      <Bar>
        <AppName>Hamoney</AppName>
        <div>
          <span>수입 0</span>
          <span>지출 {spendingSum}</span>
        </div>
        <BsPlusCircleFill
          style={{ cursor: "pointer" }}
          size={30}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          plus
        </BsPlusCircleFill>
      </Bar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 28px;
  background-color: black;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #cfcfcf;
  border-radius: 100px;
  min-width: 545px;
  height: 32px;
  color: black;
`;

const AppName = styled.span``;

export default MenuBar;
