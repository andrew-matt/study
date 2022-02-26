import React from 'react';
import s from "../Result.module.css";

type CounterPropsType = {
    number: number
    setNumber: (number: number) => void
}

export const Counter: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={props.number === 5 ? s.disabled : s.counter}>
            {props.number}
        </div>
    );
};
