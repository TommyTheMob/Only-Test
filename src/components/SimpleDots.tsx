import React from 'react';
import cls from './simpleDots.module.scss'
import cn from "classnames";
import {listYears} from "@/utils/listYears";
import {dotsData} from "@/data/dotsData";
import {getAngle} from "@/utils/getAngle";

interface SimpleDotsProps {
    positions: string[]
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
    angle: number
    setAngle: React.Dispatch<React.SetStateAction<number>>
    setYearFrom: React.Dispatch<React.SetStateAction<number>>
    setYearTo: React.Dispatch<React.SetStateAction<number>>
}

const SimpleDots: React.FC<SimpleDotsProps> = (props) => {

    const {
        positions,
        active,
        setActive,
        angle,
        setAngle,
        setYearFrom,
        setYearTo
    } = props

    const onSimpleDotClick = async (pos: string) => {
        const angleToSet = angle + getAngle(pos)

        setActive(pos)
        setAngle(angleToSet)

        await listYears(
            {from: dotsData[active].from, to: dotsData[pos].from, dispatcher: setYearFrom},
            {from: dotsData[active].to, to: dotsData[pos].to, dispatcher: setYearTo}
        )
    }

    return (
        <div className={cls.simpleDotsWrapper}>
            {positions.map(pos => (
                <div
                    key={pos}
                    className={cn(cls.dot, (active === pos) && cls.active)}
                    onClick={() => onSimpleDotClick(pos)}
                />
            ))}
        </div>
    );
};

export default SimpleDots;
