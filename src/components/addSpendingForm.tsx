import {useState} from 'react'
import React from "react";
import styled from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {selectedDateState} from "../state/calendarState";
import {formAmountNumberState, formAmountStringState, openRecordModalState} from "../domain/uiState";
import {AmountForamtter} from "../utils/amountForamtter";
import {InputAdornment, Menu, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField} from "@mui/material";
import {TextButton} from "./textButton";
import {selectedAccountBookState} from "../state/accountBookState";
import {Category} from "../domain/accountBook/category";
import {Payment} from "../domain/accountBook/payment";
import {recordSpending} from "../domain/recordSpending";

export const AddSpendingForm = () => {
    const accountBook = useRecoilValue(selectedAccountBookState)
    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState)
    const [formContent, setFormContent] = useState<string | undefined>("")
    const [formCategory, setFormCategory] = useState<Category | undefined>()
    const [formPayment, setFormPayment] = useState<Payment | undefined>()
    const [amount, setAmount] = useRecoilState(formAmountNumberState)
    const amountString = useRecoilValue(formAmountStringState)
    const amountFormatter = AmountForamtter.getInstance()
    const [isOpen, setModalOpen] = useRecoilState(openRecordModalState)
    const onlyNumberRegex = /[^\d]+/g

    return (
        <div>
            <Row>
                <Label>날짜</Label>
                <span>{selectedDate.format('YYYYMMMDD')}</span>
            </Row>
            <Row>
                <Label>금액</Label>
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
            <Row>
                <Label>수단</Label>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formPayment?.name}
                    label="Payment"
                    onChange={(event: SelectChangeEvent) => {
                        const idx = parseInt(event.target.value)
                        setFormPayment(accountBook?.payments[idx])
                    }}
                >
                    {accountBook?.payments.map((value, index) => <MenuItem value={index}>{value.name}</MenuItem>)}
                </Select>
            </Row>
            <Row>
                <Label>분류</Label>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formCategory?.name}
                    label="Category"
                    onChange={(event: SelectChangeEvent) => {
                        const idx = parseInt(event.target.value)
                        setFormCategory(accountBook?.categories[idx])
                    }}
                >
                    {accountBook?.categories.map((value, index) => <MenuItem value={index}>{value.name}</MenuItem>)}
                </Select>
            </Row>
            <Row>
                <Label>내용</Label>
                <TextField
                    value={formContent}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setFormContent(e.target.value)}
                />
            </Row>

            <TextButton content={"등록하기"} onClick={async () => {
                await recordSpending({
                    accountBook: accountBook,
                    date: selectedDate,
                    amount: amount,
                    category: formCategory,
                    content: formContent,
                    payment: formPayment
                })
                setModalOpen(false)
            }}/>
            <TextButton content={"추가 등록하기"} onClick={async () => {
                await recordSpending({
                    accountBook: accountBook,
                    date: selectedDate,
                    amount: amount,
                    category: formCategory,
                    content: formContent,
                    payment: formPayment
                })
            }}/>
        </div>
    )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Label = styled.span`
  padding: 0 9px;
`