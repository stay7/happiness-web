import React from "react";
import styled from "styled-components";

export function MenuBar() {
  return (
    <Container>
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
  background-color: #fbf7f4;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: black;
  border-radius: 100px;
  min-width: 400px;
  height: 32px;
  color: white;
`;

const AppName = styled.span``;

export default MenuBar;
