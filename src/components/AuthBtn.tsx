import React, { useState, useEffect } from 'react';
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';
import { withRouter } from 'react-router-dom';
import { observer } from "mobx-react";

import authStore from "../stores/AuthStore";

interface AuthProps {
    history: object
};

const AuthBtn: React.FC<AuthProps> = observer(({ history }) => {
    const { isSignIn, setIsSignIn } = authStore;

    useEffect(() => {
        ApiCalendar.onLoad(() => {
            ApiCalendar.listenSign(signUpdate)
        });
    }, []);

    const signUpdate = (sign: boolean): void => {
        setIsSignIn(sign)
    };

    console.log(`sign In status: ${isSignIn}`);

    const handleClick = (name: string): void => {
         if (name === 'signIn') {
             ApiCalendar.handleAuthClick();
         } else {
             console.log('sign OUT');
             ApiCalendar.handleSignoutClick();
             // @ts-ignore
             history.push('/');
         }
    };

    const renderBtn = () => {
        console.log(`sign in status in BUTTON: ${isSignIn}`);
        if (isSignIn) {
            return (
                <button onClick={() => handleClick('signOut')} className='ui button'>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={() => handleClick('signIn')} className='ui google red button'>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    };

    return renderBtn();
});

// @ts-ignore
export default withRouter(AuthBtn);