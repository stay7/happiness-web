import React from 'react';
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {openRecordModalState} from "../domain/uiState";

export const LeftSection = () => {
    const [isOpen, setOpenModal] = useRecoilState(openRecordModalState)

    return (
        <Container>
            <Button onClick={() => setOpenModal(true)}>지출 추가</Button>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #e2e2e2;
`

const Button = styled.button`
  width: 180px;
  height: 30px;
  color: white;
  border: solid 0;
  text-align: center;
  background-color: #335BEB;
  border-radius: 8px;
`