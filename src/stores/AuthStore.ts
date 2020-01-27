import { observable, action } from "mobx";
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';

class AuthStore {
    @observable isSignIn: boolean = ApiCalendar.sign;

    @action setIsSignIn = (val: boolean): void => {
        this.isSignIn = val;
    };
}

export default new AuthStore();