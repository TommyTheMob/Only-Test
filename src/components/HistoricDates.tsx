import React, {useEffect, useState} from 'react'
import cls from './historicDates.module.scss'
import cn from 'classnames'
import Dot from "@/components/Dot"
import Years from "@/components/Years";
import Buttons from "@/components/Buttons";
import SwiperBlock from "@/components/SwiperBlock";
import { useMediaQuery } from 'react-responsive'
import {dotsData} from "@/data/dotsData";
import SimpleDots from "@/components/SimpleDots";

const HistoricDates: React.FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 320px)'})
    const isDesktop = !isMobile

    const positions = ['topRight', 'midRight', 'botRight', 'botLeft', 'midLeft', 'topLeft']

    const [angle, setAngle] = useState(0)
    const [active, setActive] = useState('topRight')

    const [yearFrom, setYearFrom] = useState(1980)
    const [yearTo, setYearTo] = useState(1986)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isMobile) {
            setIsActive(true)
            const timer = setTimeout(() => {
                setIsActive(false)
            }, 800)

            return () => clearTimeout(timer)
        }
    }, [active])

    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                {isDesktop && <div className={cls.verticalVector}/>}
                {isDesktop && <div className={cls.horizontalVector}/>}
                {isDesktop && <div className={cls.roundWrapper}>
                    <div
                        className={cls.round}
                        style={{transform: `rotate(${angle}deg)`}}
                    >
                        <div
                            className={cls.dotsParent}
                        >
                            {positions.map((pos, i) => (
                                <Dot
                                    key={pos}
                                    position={pos}
                                    angle={angle}
                                    setAngle={setAngle}
                                    active={active}
                                    setActive={setActive}
                                    setYearFrom={setYearFrom}
                                    setYearTo={setYearTo}
                                />
                            ))}
                        </div>
                    </div>
                </div>}
                <div className={cls.title}>
                    {isDesktop && <div className={cls.border}/>}
                    <div className={cls.textContent}>
                        <span className={cls.text}>Исторические даты</span>
                    </div>
                </div>
                <Years
                    yearFrom={yearFrom}
                    yearTo={yearTo}
                />
                {isMobile && <div className={cn(cls.name, isActive && cls.fadeIn)}>{dotsData[active].name}</div>}
                {isMobile && <div className={cn(cls.divider, isActive && cls.fadeIn)} />}
                <Buttons
                    positions={positions}
                    active={active}
                    setActive={setActive}
                    angle={angle}
                    setAngle={setAngle}
                    setYearFrom={setYearFrom}
                    setYearTo={setYearTo}
                />
                <SwiperBlock
                    active={active}
                />
                {isMobile &&
                    // setting angle here IS ONLY for correct active dot positioning ONLY IF you switch between mobile and desktop versions
                    <SimpleDots
                        positions={positions}
                        active={active}
                        setActive={setActive}
                        angle={angle}
                        setAngle={setAngle}
                        setYearFrom={setYearFrom}
                        setYearTo={setYearTo}
                    />
                }
            </div>
        </div>
    );
};

export default HistoricDates;
