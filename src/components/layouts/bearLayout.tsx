import styled from "styled-components";
import React from "react";
import MenuBar from "../menuBar";

type Props = {
  children: React.ReactNode;
};

export const BearLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <MenuBar />
      <LayoutContainer>{children}</LayoutContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const LayoutContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f7f5ee;
`;
