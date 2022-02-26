import React from 'react';
import s from "../Result.module.css";

type ButtonPropsType = {
    value?: number
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <span className={s.buttons}>
            <button disabled={(props.value === 5 && props.name === "inc") || (props.value === 0 && props.name === "reset")} onClick={props.callback}>{props.name}</button>
        </span>
    );
};