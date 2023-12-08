import React from "react";
import {sleep} from "@/utils/sleep";

export const listYear = async (yearFrom: number, yearTo: number, dispatcher: React.Dispatch<React.SetStateAction<number>>) => {
    if (yearFrom < yearTo) {
        for (let i = yearFrom; i <= yearTo; i++) {
            await sleep(10)
            dispatcher(i)
        }
    } else {
        for (let i = yearFrom; i >= yearTo; i--) {
            await sleep(10)
            dispatcher(i)
        }
    }
}

interface listYearsProp {
    from: number
    to: number
    dispatcher: React.Dispatch<React.SetStateAction<number>>
}
export const listYears = async (yearsFrom: listYearsProp, yearsTo :listYearsProp) => {
    await Promise.all([
        listYear(yearsFrom.from, yearsFrom.to, yearsFrom.dispatcher),
        listYear(yearsTo.from, yearsTo.to, yearsTo.dispatcher)
    ])
}