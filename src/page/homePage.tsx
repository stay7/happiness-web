import * as React from "react";
import {useEffect, useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Layout from "../components/layout";
import {accountBookStore} from "../domain/accountBook/accountBookStore";
import {useRecoilState} from "recoil";
import {AccountBook} from "../domain/accountBook/accountBook";
import {accountBooksState, selectedAccountBookState} from "../domain/accountBook/accountBookState";

const HomePage = () => {
    const [selectedDate, onChange] = useState(new Date())
    const [accountBooks, setAccountBooks] = useRecoilState<AccountBook[]>(accountBooksState)
    const [selectedAccountBook, setSelectedAccountBook] = useRecoilState<AccountBook | null>(selectedAccountBookState)

    // @ts-ignore
    useEffect(() => {
        getAllAccountBooks()
    }, [])


    return (
        <div>
            <Layout>
                <div>{selectedAccountBook?.title}</div>
                <Calendar onChange={onChange} value={selectedDate}/>
                <div>{selectedAccountBook?.startDay}</div>
                <div>{selectedAccountBook?.payments.map(value => <div>{value.name}</div>)}</div>
            </Layout>
        </div>
    )

    async function getAllAccountBooks(){
        const {accountBooks} = await accountBookStore.all()
        setAccountBooks(accountBooks)
        setSelectedAccountBook(accountBooks[0])
        console.log(accountBooks)
    }
};
export default HomePage;