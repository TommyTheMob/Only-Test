import React, {useEffect, useState} from 'react'
import cls from "@/components/swiperBlock.module.scss"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {dotsData} from "@/data/dotsData";
import Button from '@/assets/swiperButton.svg'
import cn from "classnames";
import {useMediaQuery} from "react-responsive";

interface SwiperBlockProps {
    active: string
}

const SwiperBlock: React.FC<SwiperBlockProps> = (props) => {
    const {
        active
    } = props

    const isMobile = useMediaQuery({query: '(max-width: 430px)'})
    const isDesktop = !isMobile

    const [swiperInstance, setSwiperInstance] = useState<SwiperCore>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(true)
        const timer = setTimeout(() => {
            setIsActive(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [active])

    let renderSlides = []
    let index = 0
    for (let i = dotsData[active].from; i <= dotsData[active].to; i++) {
        renderSlides.push(
            <SwiperSlide key={i} className={cls.swiperSlide}>
                <div className={cls.sliderTitle}>{i}</div>
                <div className={cls.sliderContent}>{dotsData[active].slides[index]}</div>
            </SwiperSlide>
        )
        index++
    }

    const renderButton = (side: string) => {
        const btnProps = {
            className: cn(
                cls.btn,
                side === 'left' ? cls.left : cls.right,
                ((side === 'left' && activeIndex <= 0) || (side === 'right' && activeIndex >= Math.ceil(renderSlides.length / 3))) && cls.hide
            ),
            width: 70,
            height: 70,
            onClick: side === 'left' ? () => swiperInstance.slidePrev() : () => swiperInstance.slideNext()
        }

        return <Button {...btnProps} />
    }

    return (
        <div className={cn(cls.swiperWrapper, isActive && cls.fadeIn)}>
            <Swiper
                className={cls.swiper}
                modules={[Navigation]}
                slidesPerView={isDesktop ? 3 : 1.5}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {renderSlides}
            </Swiper>
            {isDesktop && renderButton('left')}
            {isDesktop && renderButton('right')}
        </div>
    );
};

export default SwiperBlock;
