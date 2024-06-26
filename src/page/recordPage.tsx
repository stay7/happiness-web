import React, { useState } from "react";
import Layout from "../components/layouts/layout";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";
import { selectedAccountBookState } from "../state/accountBookState";
import { Payment } from "../domain/accountBook/payment";
import { Category } from "../domain/accountBook/category";
import { selectedDateState } from "../state/calendarState";

const RecordPage = () => {
  const [selectedDate, setSelectedDate] = useRecoilState<dayjs.Dayjs>(selectedDateState);
  const [accountBook, setAccountBook] = useRecoilState(selectedAccountBookState);
  const [amount, setAmount] = useState<string>("");
  const [payment, setPayment] = useState<Payment>(accountBook?.payments[0]!);
  const [category, setCategory] = useState<Category>(accountBook?.categories[0]!);

  const removeCommaRegex = /[^\d]+/g;
  const concatCommaRegex = /(\d)(?=(?:\d{3})+(?!\d))/g;

  const onChangeAmount = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.target.value == "0") {
      return;
    }
    const numberAmount = event.target.value.replaceAll(removeCommaRegex, "");
    const joinCommaAmount = numberAmount.replace(concatCommaRegex, "$1,");
    setAmount(joinCommaAmount);
  };

  return (
    <>
      <Layout>
        <div>{`selected: ${selectedDate.toDate()}`}</div>
        <div>
          <div>
            <TextField
              label="금액"
              type="text"
              onChange={onChangeAmount}
              value={amount}
            />
          </div>
          <div>
            <>지불 수단</>
            {accountBook?.payments.map((p) => (
              <Button onClick={() => setPayment(p)}>{p.name}</Button>
            ))}
          </div>
          <div>{/*{payment.isCard && "일시불"}*/}</div>
          <div>
            <TextField
              label="카드/현금"
              type="text"
              value={payment.name}
              disabled={true}
            />
          </div>
          <>카테고리</>
          <div>
            {accountBook?.categories.map((c) => (
              <div>
                <div>{c.name}</div>
              </div>
            ))}
          </div>
          {/*<button onClick={onAddRecord}>등록</button>*/}
        </div>
      </Layout>
    </>
  );
};

export default RecordPage;
