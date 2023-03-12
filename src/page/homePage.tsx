import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/layouts/layout";
import { accountBookStore } from "../store/accountBookStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { AccountBook } from "../domain/accountBook/accountBook";
import { accountBooksState, selectedAccountBookState } from "../state/accountBookState";
import { spendingStore } from "../store/spendingStore";
import { Spending } from "../domain/accountBook/spending";
import { allSpendingState } from "../state/spendingState";
import dayjs from "dayjs";
import { LeftSection } from "../components/leftSection";
import { CenterSection } from "../components/centerSection";
import { RightSection } from "../components/rightSection";
import { selectedDateState } from "../state/calendarState";
import { CategoryTab } from "../components/tabs/categoryTab";
import { selectedTabIndexState } from "../state/uiState";
import authStore from "../store/authStore";
import { userState } from "../state/userState";
import { AddSpendingModal } from "../components/modal/addSpendingModal";

const HomePage = () => {
  const [accountBooks, setAccountBooks] = useRecoilState<AccountBook[]>(accountBooksState);
  const [selectedAccountBook, setSelectedAccountBook] = useRecoilState<AccountBook | null>(selectedAccountBookState);
  // @ts-ignore
  const [allSpendings, setAllSpendings] = useRecoilState<Spending[]>(allSpendingState);
  const selectedDay = useRecoilValue<dayjs.Dayjs>(selectedDateState);
  const [records, setRecords] = useState<Spending[]>();
  const selectedTabIndex = useRecoilValue(selectedTabIndexState);
  const [user, setUser] = useRecoilState(userState);

  // @ts-ignore
  useEffect(() => {
    getAllAccountBooks();
    callLogin();
  }, []);

  useEffect(() => {
    getAllSpending();
  }, [selectedAccountBook]);

  useEffect(() => {
    filterDaySpending();
  }, [selectedDay]);

  return (
    <Layout>
      <AddSpendingModal />
      <LeftSection />
      {selectTab(selectedTabIndex)}
      <RightSection />
    </Layout>
  );

  async function callLogin() {
    const { user } = await authStore.login();
    setUser(user);
  }

  async function getAllAccountBooks() {
    const { accountBooks } = await accountBookStore.all();
    setAccountBooks(accountBooks);
    setSelectedAccountBook(accountBooks[0]);
  }

  async function getAllSpending() {
    console.log("getAllSpending", selectedAccountBook);
    if (selectedAccountBook) {
      const { spendings } = await spendingStore.all(selectedAccountBook.id);
      console.log({ spendings });
      setAllSpendings(spendings);
    }
  }

  async function filterDaySpending() {
    const todaySpendings = allSpendings.filter((value) => value.spendAt == selectedDay.format("YYYYMMDD"));
    console.log({ todaySpendings });
    setRecords(todaySpendings);
  }
};

function selectTab(index: number) {
  switch (index) {
    case 0:
      return <CenterSection />;
    case 1:
      return <CategoryTab />;
    default:
      return <CenterSection />;
  }
}

export default HomePage;
