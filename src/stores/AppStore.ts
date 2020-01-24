import { observable, action } from "mobx";

class AppStore {
    @observable tasks: {id: number, title: string}[] = [
        {id: 0, title: 'learn TS'},
        {id: 1, title: 'learn MOBX'},
        {id: 2, title: 'learn new project'},
    ];

    @observable inputVal: string = '';

    @action setTasks = (val: any): void => {
        this.tasks = val;
    };

    @action setInputVal = (val: string): void => {
        this.inputVal = val;
    };

    @action addTask = (task: string): void => {
        const tasks = this.tasks;
        tasks.push({
            id: this.tasks.length,
            title: task
        });

        this.setTasks(tasks);
    };

    @action removeTask = (id: number): void => {
        this.setTasks(this.tasks.filter(task => task.id !== id))
    };
}

export default new AppStore();