import React from "react";
import { observer } from "mobx-react";
// @ts-ignore
import DatePicker from 'react-datepicker2';

import calendarStore from '../stores/CalendarStore';


const ModalInput:React.FC = observer(() => {
    const {startValue, setStartValue, endValue, setEndValue} = calendarStore;

    const handleChange = (val: any, name: string): void => {
        if (name === 'start') {
            setStartValue(val)
        } else {
            setEndValue(val);
        }
    };

    return (
        <div className='modalInput'>
            <label>
                Start:
                <DatePicker
                    value={startValue}
                    onChange={(value: any) => handleChange(value, 'start')}
                    inputFormat="YYYY-M-D-LT"
                />
            </label>
            <label>
                Finish:
                <DatePicker
                    value={endValue}
                    onChange={(value: any) => handleChange(value, 'end')}
                    inputFormat="YYYY-M-D-LT"
                />
            </label>
        </div>
    );
});

export default ModalInput;