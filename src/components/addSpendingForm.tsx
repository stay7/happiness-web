import {useState} from 'react'
import React from "react";
import styled from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {selectedDateState} from "../state/calendarState";
import {formAmountNumberState, formAmountStringState} from "../domain/uiState";
import {AmountForamtter} from "../utils/amountForamtter";
import {InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {TextButton} from "./textButton";

export const AddSpendingForm = () => {
    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState)
    const [content, setContent] = useState<string | undefined>("")
    const [amount, setAmount] = useRecoilState(formAmountNumberState)
    const amountString = useRecoilValue(formAmountStringState)
    const amountFormatter = AmountForamtter.getInstance()
    const onlyNumberRegex = /[^\d]+/g

    return (
        <div>
            <Row>
                <span>날짜</span>
                <span>{selectedDate.format('YYYYMMMDD')}</span>
            </Row>
            <Row>
                <span>금액</span>
                <OutlinedInput
                    id="filled-adornment-amount"
                    type="text"
                    value={amountString}
                    startAdornment={<InputAdornment position="start">₩</InputAdornment>}
                    endAdornment={<InputAdornment position="end">원</InputAdornment>}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                        const filtered = e.target.value.replaceAll(onlyNumberRegex, "")
                        if (filtered == "") return setAmount(undefined)
                        setAmount(amountFormatter.stringToNumber(filtered))
                    }}
                />
            </Row>
            <Row><span>수단</span></Row>
            <Row><span>분류</span></Row>
            <Row>
                <span>내용</span>
                <TextField
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setContent(e.target.value)}
                />
            </Row>

            <TextButton content={"등록하기"} onClick={() => {
            }}/>
            <TextButton content={"추가 등록하기"} onClick={() => {
            }}/>
        </div>
    )
}

const Row = styled.div`

`