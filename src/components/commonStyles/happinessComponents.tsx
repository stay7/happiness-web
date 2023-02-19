import styled from "styled-components";

export const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 50px;
  margin: 6px 0;
  text-indent: 20px;
  :focus {
    outline: none;
  }
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #d8d8d8;
  background-color: white;
`;
