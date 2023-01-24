import * as React from "react";
import {useEffect, useState} from "react";
import Layout from "../components/layout";
import {accountBookStore} from "../store/accountBookStore";
import {useRecoilState, useRecoilValue} from "recoil";
import {AccountBook} from "../domain/accountBook/accountBook";
import {accountBooksState, selectedAccountBookState} from "../state/accountBookState";
import {spendingStore} from "../store/spendingStore";
import {Spending} from "../domain/accountBook/spending";
import {allSpendingState} from "../state/spendingState";
import dayjs from "dayjs";
import {LeftSection} from "../components/leftSection";
import {CenterSection} from "../components/centerSection";
import {RightSection} from "../components/rightSection";
import {selectedDateState} from "../state/calendarState";

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
            <LeftSection/>
            <CenterSection/>
            <RightSection/>

            {/*<div>all</div>*/}
            {/*{allSpendings.map(value => <div>{value.amount}</div>)}*/}
            {/*<div>today {selectedDay.format("YYYYMMDD")}</div>*/}
            {/*{records?.map(value => <div>{value.spendAt} {value.amount}</div>)}*/}
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