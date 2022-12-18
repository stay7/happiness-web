import * as React from "react";
import {useEffect, useState} from "react";
import Calendar from 'react-calendar'

const HomePage = () => {

    const [selectedDate, onChange] = useState(new Date())

    useEffect(() => {

    }, [])

    return (
        <div>
            <Calendar onChange={onChange} value={selectedDate}/>
        </div>
    )
};

export default HomePage;