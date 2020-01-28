import {observable, action} from "mobx";
import { persist } from 'mobx-persist'

class AppStore {
    @persist('list') @observable tasks: {id: number, title: string}[] = [];

    @persist @observable inputVal: string = '';

    @action setTasks = (val: any): void => {
        this.tasks = val;
    };

    @action setInputVal = (val: string): void => {
        this.inputVal = val;
    };

    @action addTask = (task: string): void => {
        const tasks = this.tasks;
        tasks.push({
            id: this.tasks.length + 1,
            title: task
        });

        this.setTasks(tasks);
    };

    @action removeTask = (id: number): void => {
        this.setTasks(this.tasks.filter(task => task.id !== id))
    };
}

export default new AppStore();