import React, {useState} from "react";
import Layout from "../components/layout";
import {useRecoilState} from "recoil";
import {selectedDateState} from "../domain/date/dateState";
import dayjs from "dayjs";
import {Button, TextField} from "@mui/material";
import {selectedAccountBookState} from "../domain/accountBook/accountBookState";
import {Payment} from "../domain/accountBook/payment";
import {Category} from "../domain/accountBook/category";
import {accountBookStore, IRecordForm} from "../domain/accountBook/accountBookStore";

const RecordPage = () => {
    const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState)
    const [accountBook, setAccountBook] = useRecoilState(selectedAccountBookState)
    const [amount, setAmount] = useState<string>("")
    const [payment, setPayment] = useState<Payment>(accountBook?.payments[0]!)
    const [category, setCategory] = useState<Category>(accountBook?.categories[0]!)

    const onChangeAmount = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.target.value == "0") {
            return
        }
        const numberAmount = event.target.value.replaceAll(/[^\d]+/g, "")
        const joinCommaAmount = numberAmount.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
        setAmount(joinCommaAmount)
    }

    const onAddRecord = async () => {
        const data: IRecordForm = {
            accountBookId: accountBook!.id,
            amount: parseInt(amount),
            categoryId: category.id,
            description: "",
            paymentId: payment.id,
            spendAt: selectedDate.format("YYYYMMDD")
        }
        console.log(data)
        await accountBookStore.record(data)
    }
    console.log('payment', payment)

    return (
        <>
            <Layout>
                <div>{`selected: ${selectedDate.toDate()}`}</div>
                <div>
                    <div>
                        <TextField label="금액" type="text" onChange={onChangeAmount} value={amount}/>
                    </div>
                    <div>
                        <>
                            지불 수단
                        </>
                        {accountBook?.payments.map(p => <Button
                            onClick={() => setPayment(p)}>{p.name}</Button>)}
                    </div>
                    <div>
                        {/*{payment.isCard && "일시불"}*/}
                    </div>
                    <div>
                        <TextField label="카드/현금" type="text" value={payment.name} disabled={true}/>
                    </div>
                    <>
                        카테고리
                    </>
                    <div>
                        {accountBook?.categories.map(c => <div>
                            <div>{c.name}</div>
                        </div>)}
                    </div>
                    <button onClick={onAddRecord}>등록</button>
                </div>
            </Layout>
        </>
    )
};

export default RecordPage;