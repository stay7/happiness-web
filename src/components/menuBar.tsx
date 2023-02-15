import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";

export function MenuBar() {
  const user = useRecoilValue(userState);
  return (
    <Container>
      <Hello>Hello,{user?.nickname}</Hello>
      <Bar>
        <AppName>Hamoney</AppName>
        <div>
          <span>수입 75,000</span>
          <span>지출 75,000</span>
        </div>
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

const Hello = styled.div`
  position: absolute;
  left: 20px;
  text-align: left;
  color: #ffffff;
  opacity: 0.8;
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
