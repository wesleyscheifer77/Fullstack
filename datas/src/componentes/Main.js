import React, { useState } from "react";
import Form from "./Form";
import './Main.css';

function showDate (dateString, daysMonthsYears) {
    const dateToShow = new Date(dateString);

    if(!dateString || !dateToShow.getTime()) return '';

    dateToShow.setUTCHours(3);

    const {days, months, years} = daysMonthsYears;

    if (days) dateToShow.setDate(dateToShow.getDate() + Number(days));
    if (months) dateToShow.setMonth(dateToShow.getMonth() + Number(months));
    if (years) dateToShow.setFullYear(dateToShow.getFullYear() + Number(years));

    return dateToShow.toLocaleString();
}

export default function Main(){
    const [date, setDate] = useState ('');
    const [daysMonthsYears, setdaysMonthsYears] = useState ({
        days: 0,
        months:0,
        years: 0
    });
    return (
        <>
        <h1 className= "main-title">Datas</h1>
        <Form date={date} 
        setDate={setDate}
        daysMonthsYears={daysMonthsYears}
        setdaysMonthsYears={setdaysMonthsYears}
        />
        <p className="date">{showDate(date, daysMonthsYears)}</p>
        </>
    );
}