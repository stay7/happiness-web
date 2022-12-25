import * as React from "react";
import {useEffect} from "react";
import 'react-calendar/dist/Calendar.css';
import Layout from "../components/layout";
import {accountBookStore} from "../domain/accountBook/accountBookStore";
import {useRecoilState} from "recoil";
import {AccountBook} from "../domain/accountBook/accountBook";
import {accountBooksState, selectedAccountBookState} from "../domain/accountBook/accountBookState";
import HomeCalendar from "../components/homeCalendar";

const HomePage = () => {
    const [accountBooks, setAccountBooks] = useRecoilState<AccountBook[]>(accountBooksState)
    const [selectedAccountBook, setSelectedAccountBook] = useRecoilState<AccountBook | null>(selectedAccountBookState)

    // @ts-ignore
    useEffect(() => {
        getAllAccountBooks()
    }, [])


    return (
        <div>
            <Layout>
                <HomeCalendar/>
            </Layout>
        </div>
    )

    async function getAllAccountBooks() {
        const {accountBooks} = await accountBookStore.all()
        setAccountBooks(accountBooks)
        setSelectedAccountBook(accountBooks[0])
    }
};
export default HomePage;