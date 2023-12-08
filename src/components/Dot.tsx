import React, {useState} from 'react';
import cn from "classnames";
import cls from "@/components/Dot.module.scss";
import {getAngle} from "@/utils/getAngle";
import {listYears} from '@/utils/listYears'
import {dotsData} from "@/data/dotsData";

interface DotProps {
    position: string
    angle: number
    setAngle: React.Dispatch<React.SetStateAction<number>>
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
    setYearFrom: React.Dispatch<React.SetStateAction<number>>
    setYearTo: React.Dispatch<React.SetStateAction<number>>
}

const Dot: React.FC<DotProps> = (props) => {
    const {
        position,
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
        const angleToSet = angle + getAngle(position)

        setActive(position)
        setAngle(angleToSet)

        await listYears(
            {from: dotsData[active].from, to: dotsData[position].from, dispatcher: setYearFrom},
            {from: dotsData[active].to, to: dotsData[position].to, dispatcher: setYearTo}
        )

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
                <div className={cn(cls.dotNumWrapper, (active === position || expand) && cls.active)}>
                    <div
                        className={cls.dotNum}
                        style={{transform: `rotate(${-angle}deg)`}}
                    >
                        <div>{dotsData[position].num}</div>
                        <div className={cn(cls.name, (active === position) && cls.active)}>
                            {dotsData[position].name}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dot;
