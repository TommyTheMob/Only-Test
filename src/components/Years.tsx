import React from 'react';
import cls from "@/components/years.module.scss";

interface YearsProps {
    yearFrom: number
    yearTo: number
}

const Years = (props: YearsProps) => {
   const {
       yearFrom,
       yearTo
   } = props

    return (
        <div className={cls.years}>
            <div className={cls.yearFrom}>
                {yearFrom}
            </div>
            <div className={cls.yearTo}>
                {yearTo}
            </div>
        </div>
    );
};

export default Years;
