import styled from "styled-components";
import { ReactNode } from "react";

interface IExpendableFormProps {
  selected?: boolean;
  expand?: ReactNode;
  children?: ReactNode;
  title?: string;
}

export const ExpandableRow = ({ selected, expand, children, title }: IExpendableFormProps) => {
  return (
    <Container selected={selected}>
      <Form>
        <FormTitle selected={selected}>{title}</FormTitle>
        <FormContent>{children}</FormContent>
      </Form>
      {selected && <ExpandedForm>{expand}</ExpandedForm>}
    </Container>
  );
};

interface StyleProp {
  selected?: boolean;
}

const Container = styled.div<StyleProp>`
  margin: 6px 0;
  border: ${(props) => props.selected && "1px solid black"};
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 38px;
  border-bottom: 1px solid #d4d4d4;
`;

const FormTitle = styled.div<StyleProp>`
  position: absolute;
  font-size: 10px;
  color: ${(props) => (props.selected ? "black" : "#d4d4d4")};
  padding: 0 10px;
`;

const FormContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ExpandedForm = styled.div``;
