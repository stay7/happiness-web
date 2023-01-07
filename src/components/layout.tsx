import React from "react";
import MenuBar from "./menuBar";
import styled from "styled-components";

type Props = {
    children: React.ReactNode
}

const layout: React.FC<Props> = ({children}) => {
    return (
        <Container>
            <MenuBar/>
            <div>
                {children}
            </div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export default layout