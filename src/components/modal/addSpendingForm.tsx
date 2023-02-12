import React, { useState } from "react";
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
  const formAmountRef = React.useRef(null);
  const formPaymentRef = React.useRef(null);

  const ExpandAmount = () => {
    return (
      <ExpandContainer>
        <div>무엇에 쓴 금액인가요?</div>
        <Input
          ref={formDateRef}
          value={formContent}
          placeholder="내용입력"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormContent(e.target.value);
          }}
        />
        <div>
          {accountBook?.categories.map((value) => (
            <CategoryContainer>{value.name}</CategoryContainer>
          ))}
        </div>
      </ExpandContainer>
    );
  };

  return (
    <div>
      <ExpandableRow
        selected={true}
        title="날짜"
        expand={<DatePicker selected={selectedDate.toDate()} onChange={(date) => setSelectedDate(dayjs(date))} inline />}
      >
        <span>{selectedDate.format("YYYYMMMDD")}</span>
      </ExpandableRow>

      <ExpandableRow selected={true} title="금액" expand={<ExpandAmount />}>
        <div>
          <Input
            type="text"
            ref={formAmountRef}
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

      <ExpandableRow selected={true} title="수단">
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
`;

const CategoryContainer = styled.span`
  display: flex;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  align-items: center;
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
