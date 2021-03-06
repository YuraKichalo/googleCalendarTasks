import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';
// @ts-ignore
import Modali, { useModali } from 'modali';

import ModalInput from "./ModalInput.";
import calendarStore from '../stores/CalendarStore';
import store from '../stores/AppStore'

interface TodoListProps {
    title: string,
    id: number
}

const CalendarBtn: React.FC<TodoListProps> = observer(({ title, id }) => {
    const [dateError, setDateError] = useState('');
    const { startValue, endValue } = calendarStore;
    const { removeTask } = store;

    const [completeModal, toggleCompleteModal] = useModali({
        animated: true,
        title: `Specify the day and timeframe for task "${title.toUpperCase()}"`,
        buttons: [
            <Modali.Button
                label="Cancel"
                isStyleCancel
                onClick={() => toggleCompleteModal()}
            />,
            <Modali.Button
                label="Add"
                isStyleDestructive
                onClick={() => addTaskToCalendar()}
            />,
        ]
    });

    const addTaskToCalendar = (): void => {
        const event: object = {
            summary: title,
            start: {
                dateTime: startValue.toISOString(),
                timeZone: "Europe/Paris"
            },
            end: {
                dateTime: endValue.toISOString(),
                timeZone: "Europe/Paris"
            }
        };

        ApiCalendar.createEvent(event)
            .then((result: any) => {
                removeTask(id);
                toggleCompleteModal();
            })
            .catch((error: any) => {
                setDateError(error.result.error.message);
            });
    };

    const onBtnClick = (): void => {
        toggleCompleteModal();
    };

    const renderErrorMessage = () => {
        if (dateError) {
            return <div className='dateError ui pointing red basic label'>{`Error: ${dateError}`}</div>
        }
    };

    return (
        <div>
            <Modali.Modal {...completeModal} >
                <ModalInput />
                {renderErrorMessage()}
            </Modali.Modal>
            <button onClick={onBtnClick} className='ui blue button'>Add to calendar</button>
        </div>
    );
});

export default CalendarBtn