import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

export class TasksListComponent implements OnInit {
    // @ViewChild('newTaskInput') newTaskInput: ElementRef;
    tasks: string[] = [];
    day = 'Today';
    canAddTask = false;
    maxTasks = 4;
    fontStyle = 'italic';

    constructor() { }

    ngOnInit() {
    }

    getDay(day: string): string {
        return day;
    }

    addTask(newTaskInput: HTMLInputElement) {
        // const task = this.newTaskInput.nativeElement.value;
        const task = newTaskInput.value;
        this.tasks.push(task);
        console.log(this.tasks);
    }

    checkInput(e) {
        this.canAddTask = e.target.value ? true : false;
    }

    getColor(): string {
        return this.tasks.length < 4 ? 'blue' : 'red';
    }

}
