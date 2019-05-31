import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { TasksService } from '../common/tasks.service';
import { Task } from '../common/task.model';
import { Subscription } from 'rxjs';

// @Component({
//     selector: 'app-tasks-list',
//     template: `
//         <div>dupa</div>
//     `,
//     styles: ['div { color: yellow; }']
//   })
@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit, OnDestroy {
    // @ViewChild('newTaskInput') newTaskInput: ElementRef;
    tasks: Task[] = [];
    day = 'Today';
    canAddTask = false;
    maxTasks = 4;
    fontStyle = 'italic';
    selectedTaskText: string;
    sub: Subscription;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        // this.tasks = this.tasksService.getTasks();
        this.tasks = this.tasksService.getTasks();

        this.sub = this.tasksService.tasksChanged.subscribe(
            (tasks: Task[]) => this.tasks = tasks
            // (error: Error) => console.log(error)
        );
    }

    getDay(day: string): string {
        return day;
    }

    // addTask(newTaskInput: HTMLInputElement) {
    //     // const task = this.newTaskInput.nativeElement.value;
    //     const task = newTaskInput.value;
    //     this.tasks.push(task);
    // }
    addTask(newTaskInput: HTMLInputElement) {
        this.tasksService.addTask(newTaskInput.value);
    }

    checkInput(e) {
        this.canAddTask = e.target.value ? true : false;
    }

    getColor(): string {
        return this.tasks.length < 4 ? 'blue' : 'red';
    }

    onTaskSelect(task: string) {
        this.selectedTaskText = task;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
