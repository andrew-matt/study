import {ChangeEvent, FC, ReactElement, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';

export const Example_4 = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
            <SlowComponent/>
        </div>
    );
};

export const Example_4_with_children: FC<{children: ReactElement}> = ({children}) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <div>
                <input type="text" value={value} onChange={onChange}/>
            </div>
            {children}
            {children}
            {children}
        </div>
    );
};