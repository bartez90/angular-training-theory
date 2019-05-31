import { Component, OnInit, Input, EventEmitter, Output, ContentChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/common/task.model';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
    @ContentChild('content') content: ElementRef;
    @Input() task: Task;
    @Output() taskTextClicked = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onTaskTextClick() {
        const text = this.task.name + ' ' + this.content.nativeElement.innerText;
        this.taskTextClicked.emit(text);
    }

}
