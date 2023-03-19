import styled from "styled-components";
import { MouseEventHandler } from "react";

interface IButtonProp {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  width?: number;
  height?: number;
}

export const HamoneyButton = ({ title, onClick, width, height }: IButtonProp) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
    >
      <span>{title}</span>
    </Container>
  );
};

interface IContainerProps {
  width?: number;
  height?: number;
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border-radius: 4px;
  width: ${(props) => props.width || "380px"};
  height: ${(props) => props.height || "50px"};
  cursor: pointer;
`;
