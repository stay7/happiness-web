import react from 'react'
import {Spending} from "../domain/accountBook/spending";
import styled from "styled-components";
import {AmountForamtter} from "../utils/amountForamtter";

interface ISpendingRowProps {
    spending: Spending
}

// category를 받아서 그 색을 넣어줘야함
export const SpendingRow = ({spending}: ISpendingRowProps) => {
    const amountFormatter = AmountForamtter.getInstance()

    return (
        <Container>
            <Dot/>
            <AmountString>{amountFormatter.numberToString(spending.amount)}</AmountString>
        </Container>
    )
}

const Container = styled.div`
  text-align: start;
`

const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #FF6565;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
`

const AmountString = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: black;
`