import React, {useState} from "react";
import Layout from "../components/layout";
import {useRecoilState} from "recoil";
import {selectedDateState} from "../domain/date/dateState";
import dayjs from "dayjs";
import {Button, TextField} from "@mui/material";
import {selectedAccountBookState} from "../domain/accountBook/accountBookState";
import {Payment} from "../domain/accountBook/payment";
import {Category} from "../domain/accountBook/category";

const RecordPage = () => {
    const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState)
    const [accountBook, setAccountBook] = useRecoilState(selectedAccountBookState)
    const [amount, setAmount] = useState<string>("")
    const [payment, setPayment] = useState<Payment>(accountBook?.payments[0]!)
    const [category, setSubCategory] = useState<Category>(accountBook?.categories[0]!)

    const onChangeAmount = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.target.value == "0") {
            return
        }
        const numberAmount = event.target.value.replaceAll(/[^\d]+/g, "")
        const joinCommaAmount = numberAmount.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
        setAmount(joinCommaAmount)
    }

    const onAddRecord = () => {

    }

    console.log(accountBook?.payments)

    return (
        <>
            <Layout>
                <div>{`selected: ${selectedDate.toDate()}`}</div>
                <form>
                    <div>
                        <TextField label="금액" type="text" onChange={onChangeAmount} value={amount}/>
                    </div>
                    <div>
                        {accountBook?.payments.map(p => <Button
                            onClick={() => setPayment(p)}>{p.name}</Button>)}
                    </div>
                    <div>
                        {/*{payment.isCard && "일시불"}*/}
                    </div>
                    <div>
                        <TextField label="카드/현금" type="text" value={payment.name} disabled={true}/>
                    </div>
                    <div>
                        {accountBook?.categories.map(c => <div><div>{c.name}</div></div>)}
                    </div>
                    <button onClick={onAddRecord}>등록</button>
                </form>
            </Layout>
        </>
    )
};

export default RecordPage;