import * as React from "react";
import {useEffect, useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Layout from "../components/layout";
import {accountBookStore} from "../domain/accountBook/accountBookStore";

const HomePage = () => {

    const [selectedDate, onChange] = useState(new Date())

    // @ts-ignore
    useEffect(() => {
        accountBookStore.all()
    }, [])

    return (
        <div>
            <Layout>
                <Calendar onChange={onChange} value={selectedDate}/>
            </Layout>
        </div>
    )
};

export default HomePage;