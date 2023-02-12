import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ITextButtonProp {
  content: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const TextButton = ({ content, onClick }: ITextButtonProp) => {
  return <Button onClick={onClick}>{content}</Button>;
};

const Button = styled.button`
  display: inline-block;
  height: 36px;
  border: solid 0;
  border-radius: 8px;
`;
