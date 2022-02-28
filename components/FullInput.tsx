import {Button} from "./Button";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type FullInputPropsType = {
    callback: (title: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = (props) => {

    let [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        props.callback(title);
        setTitle("");
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button name={"+"} callback={addTask}/>
        </div>
    )
}