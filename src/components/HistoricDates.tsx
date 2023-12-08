import React, {useRef, useState} from 'react'
import cls from './historicDates.module.scss'
import cn from 'classnames'
import Dot from "@/components/Dot"
import Years from "@/components/Years";
import Buttons from "@/components/Buttons";

const HistoricDates = () => {

    const [angle, setAngle] = useState(0)
    const [active, setActive] = useState('topRight')

    const [yearFrom, setYearFrom] = useState(2015)
    const [yearTo, setYearTo] = useState(2022)

    const positions = ['topLeft', 'midLeft', 'botLeft', 'botRight', 'midRight', 'topRight']

    console.log('rerender HistoricDates')

    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <div className={cls.verticalVector}/>
                <div className={cls.horizontalVector}/>
                <div className={cls.roundWrapper}>
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
                                    num={i + 1}
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
                </div>
                <div className={cls.title}>
                    <div className={cls.border}/>
                    <div className={cls.textContent}>
                        <span className={cls.text}>Исторические даты</span>
                    </div>
                </div>
                <Years
                    yearFrom={yearFrom}
                    yearTo={yearTo}
                />
               <Buttons />
            </div>
        </div>
    );
};

export default HistoricDates;
