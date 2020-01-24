import React, {Component, SyntheticEvent} from "react";
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';

console.log(ApiCalendar);

class CalendarBtn extends Component<{}, {}> {
    handleClick = (e: SyntheticEvent, name: string): void => {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else {
            ApiCalendar.handleSignoutClick();
        }
    };


    render(): React.ReactElement {
        return (
            <div>
                <button className='ui blue button'>Add to calendar</button>
                <button onClick={(e) => this.handleClick(e, 'sign-in')}>test IN</button>
                <button onClick={(e) => this.handleClick(e, 'sign-out')}>test OUT</button>
            </div>
        );
    }
}

export default CalendarBtn