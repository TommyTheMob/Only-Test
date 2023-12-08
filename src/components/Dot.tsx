import React, {useState} from 'react';
import cn from "classnames";
import cls from "@/components/Dot.module.scss";
import {getAngle} from "@/utils/getAngle";
import {sleep} from "@/utils/sleep"
import {listYear} from '@/utils/listYear'

interface DotProps {
    position: string
    num: number
    angle: number
    setAngle: React.Dispatch<React.SetStateAction<number>>
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
    setYearFrom: React.Dispatch<React.SetStateAction<number>>
    setYearTo: React.Dispatch<React.SetStateAction<number>>
}

const dotsData = {
    'topLeft': {name: 'Технологии', from: 1980, to: 1986},
    'midLeft': {name: 'Кино', from: 1987, to: 1991},
    'botLeft': {name: 'Литература', from: 1992, to: 1997},
    'botRight': {name: 'Театр', from: 1999, to: 2004},
    'midRight': {name: 'Спорт', from: 2006, to: 2014},
    'topRight': {name: 'Наука', from: 2015, to: 2022},
}

const Dot = (props: DotProps) => {
    const {
        position,
        num,
        angle,
        setAngle,
        active,
        setActive,
        setYearFrom,
        setYearTo
    } = props

    const [expand, setExpand] = useState(false)

    const onDotMouseEnter = () => {
        setExpand(true)
    }

    const onDotMouseLeave = () => {
        setExpand(false)
    }

    const onDotClick = async () => {
        setActive(position)
        setAngle(angle + getAngle(position))

        await Promise.all([
            listYear(dotsData[active as keyof typeof dotsData].from, dotsData[position as keyof typeof dotsData].from, setYearFrom),
            listYear(dotsData[active as keyof typeof dotsData].to, dotsData[position as keyof typeof dotsData].to, setYearTo)
        ])
    }

    return (
        <>
            <div
                className={cn(cls.dotTrigger, cls[position])}
                onMouseEnter={onDotMouseEnter}
                onMouseLeave={onDotMouseLeave}
                onClick={onDotClick}
            >
                <div
                    className={((active === position) || expand) ? cn(cls.dot, cls.active) : cls.dot}
                />
                {((active === position) || expand) &&
                    <>
                        <div className={cls.dotNumWrapper}>
                            <div
                                className={cls.dotNum}
                                style={{transform: `rotate(${-angle}deg)`}}
                            >
                                <div>{num}</div>
                                {active === position && <div className={cls.name}>{dotsData[position as keyof typeof dotsData].name}</div>}
                            </div>
                        </div>
                    </>
                }
            </div>
        </>

    );
};

export default Dot;
