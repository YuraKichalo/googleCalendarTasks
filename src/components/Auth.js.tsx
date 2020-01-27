import React, { useState, useEffect } from 'react';
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';
import { observer } from "mobx-react";

import authStore from "../stores/AuthStore";

interface AuthProps {
    history: object
};

const Auth: React.FC<AuthProps> = observer(({ history }) => {
    const [BtnError, setBtnError] = useState(false);
    const { isSignIn } = authStore;

    const handleClick = () => {
        console.log(`Auth: ${ApiCalendar.sign}`);
        if (isSignIn) {
            // @ts-ignore
            history.push('/list');
            setBtnError(false);
        } else {
            setBtnError(true);
        }
    };

    const renderError = () => {
        const text: string = isSignIn ? 'You successfully SIGNED IN' : 'Sign in with Google firs';
        const className: string = isSignIn ? 'ui pointing green basic label' : 'ui pointing red basic label';
        if (BtnError) {
            return <div className={className}>{text}</div>
        }
    };

    return (
        <div className='auth'>
            <div className='ui card'>
                <div className='content'>
                    <div className='header auth-header'>Hello mate !</div>
                    <div className='description auth-description'>
                        You need sign in with your Google account to access your calendar and create new tasks
                    </div>
                    <div className='extra content auth-content'>
                        <button className='ui button primary' onClick={handleClick}>Start</button>
                    </div>
                    <div className='error'>{renderError()}</div>
                </div>
            </div>
        </div>
    );
});

export default Auth;