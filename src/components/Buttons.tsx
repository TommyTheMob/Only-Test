import React from 'react';
import cls from "@/components/buttons.module.scss";
import {dotsData} from "@/data/dotsData";
import ArrowButton from '@/assets/button.svg'
import DisabledArrow from '@/assets/disabledButton.svg'
import cn from "classnames";
import {getAngle} from "@/utils/getAngle";
import {listYears} from "@/utils/listYears";
import {useMediaQuery} from "react-responsive";

interface ButtonsProps {
    positions: string[]
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
    angle: number
    setAngle: React.Dispatch<React.SetStateAction<number>>
    setYearFrom: React.Dispatch<React.SetStateAction<number>>
    setYearTo: React.Dispatch<React.SetStateAction<number>>
}

interface BtnProps {
    className: string
    width: number
    height: number
    onClick: () => void
}

const Buttons: React.FC<ButtonsProps> = (props) => {
    const {
        positions,
        active,
        setActive,
        angle,
        setAngle,
        setYearFrom,
        setYearTo
    } = props

    const isMobile = useMediaQuery({query: '(max-width: 430px)'})
    const isDesktop = !isMobile

    const clickHandler = async (side: string) => {
        const pos = side === 'left' ? positions[positions.indexOf(active) - 1] : positions[positions.indexOf(active) + 1]

        const angleToSet = angle + getAngle(pos)

        setActive(pos)
        setAngle(angleToSet)

        await listYears(
            {from: dotsData[active].from, to: dotsData[pos].from, dispatcher: setYearFrom},
            {from: dotsData[active].to, to: dotsData[pos].to, dispatcher: setYearTo}
        )
    }

    async function onLeftBtnClick(){
        await clickHandler('left')
    }

    async function onRightBtnClick(){
        await clickHandler('right')
    }

    const renderButton = (side: string, disabled = false) => {
        const btnProps: BtnProps = {
            className: cn(cls.arrow, side === 'left' ? cls.leftArrow : cls.rightArrow, disabled && cls.disabled),
            width: isDesktop ? 50 : 25,
            height: isDesktop ? 50 : 25,
            onClick: disabled
                ? null
                : side === 'left' ? onLeftBtnClick : onRightBtnClick
        }

        if (disabled) {
            return <DisabledArrow {...btnProps} />
        } else {
            return <ArrowButton {...btnProps} />
        }
    }

    return (
        <div className={cls.btnsWrapper}>
            <div className={cls.activePos}>
                0{dotsData[active].num}/06
            </div>
            <div className={cls.arrows}>
                {renderButton('left', active === 'topRight' && true)}
                {renderButton('right', active === 'topLeft' && true)}
            </div>
        </div>
    );
};

export default Buttons;
