import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task.model';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/common/tasks.service';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
    task: Task;

    constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => this.task = this.tasksService.getTask(params.id)
        );
    }
}
