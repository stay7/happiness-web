import React from "react";
import MenuBar from "../menuBar";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <MenuBar />
      <SectionBox>{children}</SectionBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const SectionBox = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 54px);
`;

export default layout;
