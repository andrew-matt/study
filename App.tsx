import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";

function App() {

    const maxValue = 5
    const startValue = 0
    const counterStep = 1

    const [number, setNumber] = useState<number>(startValue)
    const increase = () => {
        number < maxValue && setNumber(number + counterStep)
    }

    const reset = () => {
        setNumber(startValue)
    }
    return (
        <div className="App">
                <Counter number={number} setNumber={setNumber}/>
            <div>
                <Button value={number} name={"inc"} callback={increase}/>
                <Button value={number} name={"reset"} callback={reset}/>
            </div>
        </div>
    );
}

export default App;
