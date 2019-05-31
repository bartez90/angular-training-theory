import { Task } from './task.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class TasksService {
    private tasks: Task[] = [new Task('1', 'task 1', false), new Task('2', 'task 2', false)];
    id = this.tasks.length;
    tasksChanged = new Subject<Task[]>();

    getTasks(): Task[] {
        return this.tasks.slice();
    }

    getTask(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    addTask(taskName: string) {
        this.id++;
        this.tasks.push(new Task(this.id.toString(), taskName, false));
        this.tasksChanged.next(this.getTasks());
        // this.tasksChanged.error('Something went wrong');
        // this.tasksChanged.complete();
    }

    constructor() { }
}
