import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedDateState } from "../../state/calendarState";
import { formAmountNumberState, formAmountStringState, openRecordModalState } from "../../state/uiState";
import { AmountForamtter } from "../../utils/amountForamtter";
import { selectedAccountBookState } from "../../state/accountBookState";
import { Category } from "../../domain/accountBook/category";
import { Payment } from "../../domain/accountBook/payment";
import { recordSpending } from "../../domain/recordSpending";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ExpandableRow } from "../expandableRow";
import { useFocus } from "../../hooks/useFocus";

export const AddSpendingForm = () => {
  const accountBook = useRecoilValue(selectedAccountBookState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [formContent, setFormContent] = useState<string | undefined>("");
  const [formCategory, setFormCategory] = useState<Category | undefined>();
  const [formPayment, setFormPayment] = useState<Payment | undefined>();
  const [amount, setAmount] = useRecoilState(formAmountNumberState);
  const amountString = useRecoilValue(formAmountStringState);
  const amountFormatter = AmountForamtter.getInstance();
  const [isOpen, setModalOpen] = useRecoilState(openRecordModalState);
  const onlyNumberRegex = /[^\d]+/g;
  const formDateRef = React.useRef(null);
  const formPaymentRef = React.useRef(null);

  const [amountRef, setAmountInputFocus] = useFocus();
  const [expandAmount, setExpandAmount] = useState(false);
  const [expandPayment, setExpandPayment] = useState(false);

  const ExpendedAmount = () => {
    return (
      <ExpandContainer>
        <div>무엇에 쓴 금액인가요?</div>
        <Input
          ref={formDateRef}
          value={formContent}
          placeholder="내용입력"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            setFormContent(e.target.value);
          }}
        />
        <List>
          {accountBook?.categories.map((category) => (
            <CategoryContainer
              key={category.id}
              onClick={() => setFormCategory(category)}
            >
              <span>{category.name}</span>
            </CategoryContainer>
          ))}
        </List>
      </ExpandContainer>
    );
  };

  const ExpandPayment = () => {
    return (
      <ExpandContainer>
        <List>
          {accountBook?.payments.map((payment) => (
            <PaymentContainer
              key={payment.id}
              onClick={() => setFormPayment(payment)}
            >
              <span>{payment.name}</span>
            </PaymentContainer>
          ))}
        </List>
      </ExpandContainer>
    );
  };

  return (
    <div>
      <ExpandableRow
        selected={true}
        title="날짜"
        expand={
          <DatePicker
            selected={selectedDate.toDate()}
            onChange={(date) => setSelectedDate(dayjs(date))}
            inline
          />
        }
      >
        <span>{selectedDate.format("YYYYMMMDD")}</span>
      </ExpandableRow>

      <ExpandableRow
        selected={document.activeElement === amountRef.current}
        title="금액"
        expand={<ExpendedAmount />}
      >
        <div>
          <Input
            type="text"
            ref={amountRef}
            value={amountString}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const filtered = e.target.value.replaceAll(onlyNumberRegex, "");
              if (filtered == "") return setAmount(undefined);
              setAmount(amountFormatter.stringToNumber(filtered));
            }}
          />
          원
        </div>
      </ExpandableRow>

      <ExpandableRow
        selected={true}
        title="수단"
        expand={<ExpandPayment />}
      >
        <div>
          <span>지불 수단을 선택해주세요</span>
        </div>
      </ExpandableRow>

      <ButtonsContainer>
        <ContinueButton
          onClick={async () => {
            await recordSpending({
              accountBook: accountBook,
              date: selectedDate,
              amount: amount,
              category: formCategory,
              content: formContent,
              payment: formPayment,
            });
          }}
        >
          추가 등록하기
        </ContinueButton>
        <AddButton
          onClick={async () => {
            await recordSpending({
              accountBook: accountBook,
              date: selectedDate,
              amount: amount,
              category: formCategory,
              content: formContent,
              payment: formPayment,
            });
            setModalOpen(false);
          }}
        >
          등록하기
        </AddButton>
      </ButtonsContainer>
    </div>
  );
};

const Input = styled.input`
  text-align: center;
  border: 0;

  &:focus {
    outline: none;
  }
`;

const ExpandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
`;

const PaymentContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 70px;
  height: 40px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  height: 36px;
  border: solid 0;
  border-radius: 8px;
`;

const ContinueButton = styled(Button)`
  flex: 1;
`;

const AddButton = styled(Button)`
  flex: 2;
  background-color: black;
  color: white;
`;
