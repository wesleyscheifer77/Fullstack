import React from "react";

export default function Form({date, setDate, daysMonthsYears, setdaysMonthsYears}){
    return (
        <form className="main-form">
            <label htmlFor="main-date" className="main-date">
                <span>Data: </span>
                <input 
                type="date" 
                id="main-date"
                value={date}
                onChange={e => setDate(e.target.value)}
                
              />
            </label>

            <label htmlFor="more-days">
                <span>+/- Dias: </span>
                <input type="number" id="more-days" 
                className="number-input"
                value={daysMonthsYears.days}
                onChange={e=>setdaysMonthsYears({
                ...daysMonthsYears, days: e.target.value})}
                />
            </label>

            <label htmlFor="more-days">
                <span>+/- Meses: </span>
                <input type="number" id="more-days" 
                className="number-input"
                value={daysMonthsYears.months}
                onChange={e=>setdaysMonthsYears({
                ...daysMonthsYears, months: e.target.value})}
                />
            </label>

            <label htmlFor="more-days">
                <span>+/- Anos: </span>
                <input type="number" id="more-days" 
                className="number-input"
                value={daysMonthsYears.years}
                onChange={e=>setdaysMonthsYears({
                ...daysMonthsYears, years: e.target.value})}
                />
            </label>
        </form>
             
    );
}