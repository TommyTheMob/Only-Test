import React from 'react'
import classes from './App.module.scss'
import HistoricDates from "@/components/HistoricDates";

export const App = () => {
    return (
        <div className={classes.page}>
            <div className={classes.wrapper}>
                <HistoricDates />
            </div>
        </div>
    );
};