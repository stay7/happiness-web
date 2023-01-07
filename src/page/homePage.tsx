import * as React from "react";
import {useEffect, useState} from "react";
import 'react-calendar/dist/Calendar.css';
import Layout from "../components/layout";
import {accountBookStore} from "../domain/accountBook/accountBookStore";
import {useRecoilState, useRecoilValue} from "recoil";
import {AccountBook} from "../domain/accountBook/accountBook";
import {accountBooksState, selectedAccountBookState} from "../domain/accountBook/accountBookState";
import HomeCalendar from "../components/homeCalendar";
import {spendingStore} from "../domain/accountBook/spendingStore";
import {Spending} from "../domain/accountBook/spending";
import {allSpendingState, daySpendingState} from "../domain/accountBook/allSpendingState";
import {selectedDateState} from "../domain/date/dateState";
import dayjs from "dayjs";

const HomePage = () => {
    const [accountBooks, setAccountBooks] = useRecoilState<AccountBook[]>(accountBooksState)
    const [selectedAccountBook, setSelectedAccountBook] = useRecoilState<AccountBook | null>(selectedAccountBookState)
    // @ts-ignore
    const [allSpendings, setAllSpendings] = useRecoilState<Spending[]>(allSpendingState)
    const selectedDay = useRecoilValue<dayjs.Dayjs>(selectedDateState)
    const [records, setRecords] = useState<Spending[]>()

    // @ts-ignore
    useEffect(() => {
        getAllAccountBooks()
    }, [])

    useEffect(() => {
        getAllSpending()
    }, [selectedAccountBook])

    useEffect(() => {
        filterDaySpending()
    }, [selectedDay])


    return (
        <Layout>
            <HomeCalendar/>
            <div>all</div>
            {allSpendings.map(value => <div>{value.amount}</div>)}
            <div>today {selectedDay.format("YYYYMMDD")}</div>
            {records?.map(value => <div>{value.spendAt} {value.amount}</div>)}
        </Layout>
    )

    async function getAllAccountBooks() {
        const {accountBooks} = await accountBookStore.all()
        setAccountBooks(accountBooks)
        setSelectedAccountBook(accountBooks[0])
    }

    async function getAllSpending() {
        console.log('getAllSpending', selectedAccountBook)
        if (selectedAccountBook) {
            const {spendings} = await spendingStore.all(selectedAccountBook.id)
            console.log({spendings})
            setAllSpendings(spendings)
        }
    }

    async function filterDaySpending() {
        const todaySpendings = allSpendings.filter(value => value.spendAt == selectedDay.format("YYYYMMDD"))
        console.log({todaySpendings})
        setRecords(todaySpendings)
    }
};
export default HomePage;