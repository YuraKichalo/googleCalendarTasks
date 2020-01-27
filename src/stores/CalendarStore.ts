import {observable, action, computed} from "mobx";
import moment from 'moment';

class CalendarStore {
    @observable startValue = moment();
    @observable endValue = moment();

    @action setStartValue = (val: any):void => {
        this.startValue = val
    };

    @action setEndValue = (val: any):void => {
        this.endValue = val
    };
}

export default new CalendarStore();