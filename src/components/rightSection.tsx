import React from "react";
import styled from "styled-components";
import { SpendingList } from "./spendingList";

export const RightSection = () => {
  return (
    <Container>
      <SpendingList />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  min-width: 250px;
  background-color: #e2e2e2;
`;
