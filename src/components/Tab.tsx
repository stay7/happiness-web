import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { selectedTabIndexState, TAB_NAME } from "../state/uiState";

interface ITabProp {
  index: number;
}

const TAB_ICONS = [<AiOutlineCalendar />, <BiCategory />] as const;
export const Tab = ({ index }: ITabProp) => {
  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState<number>(selectedTabIndexState);
  const selected = index == selectedTabIndex;

  return (
    <Container
      selected={index == selectedTabIndex}
      onClick={() => {
        setSelectedTabIndex(index);
      }}
    >
      {TAB_ICONS[index]}
      <Title selected={selected}>{TAB_NAME[index]}</Title>
    </Container>
  );
};

interface StyleProp {
  selected?: boolean;
}

const Container = styled.div<StyleProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin: 2px 0;
  width: 180px;
  height: 32px;
  border-radius: 12px;
  background-color: #ffffff;
  ${(props) => props.selected && "opacity: 0.8"}
`;

const Title = styled.span<StyleProp>`
  margin-left: 10px;
  opacity: 0.3;
  ${(props) => props.selected && "opacity: 1.0"}
`;
