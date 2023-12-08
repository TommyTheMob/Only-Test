import React from 'react';
import cls from '@/components/clickArea.module.scss'
import cn from "classnames";

interface ClickAreaProps {
    position: string
    angle: number
    setAngle: (a: number | null) => void
    setActive: (a: string | null) => void
}

const dotsAngles = {
    topLeft: 60,
    midLeft: 120,
    botLeft: 180,
    botRight: -120,
    midRight: -60,
    topRight: 0
}

const ClickArea = (props: ClickAreaProps) => {
    const {
        position,
        angle,
        setAngle,
        setActive
    } = props

    const onAreaMouseEnter = () => {
        setActive(position)
    }

    const onAreaMouseLeave = () => {
        setActive(null)
    }

    const onAreaClick = () => {
        setAngle(dotsAngles[position as keyof typeof dotsAngles])
    }

    return (
        <div
            className={cn(cls.clickArea, cls[position])}
            onMouseEnter={onAreaMouseEnter}
            onMouseLeave={onAreaMouseLeave}
            onClick={onAreaClick}
        >

        </div>
    );
};

export default ClickArea;
