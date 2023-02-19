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
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
