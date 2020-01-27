import React, { Component } from "react";
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
                label="YES"
                isStyleDestructive
                onClick={() => addTaskToCalendar()}
            />,
        ]
    });

    const [taskAlert, toggleTaskAlert] = useModali({
        animated: true,
        title: `Task "${title.toUpperCase()}" was added to your calendar`,
        buttons: [
            <Modali.Button
                label="OK"
                isStyleCancel
                onClick={() => toggleTaskAlert()}
            />
        ],
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
                console.log(result.result)
            })
            .catch((error: any) => {
                console.log(error)
            });

        removeTask(id);
        toggleCompleteModal();
    };

    const onBtnClick = (): void => {
        toggleCompleteModal();
    };

    return (
        <div>
            <Modali.Modal {...taskAlert} />
            <Modali.Modal {...completeModal} >
                <ModalInput />
            </Modali.Modal>
            <button onClick={onBtnClick} className='ui blue button'>Add to calendar</button>
        </div>
    );
});

export default CalendarBtn