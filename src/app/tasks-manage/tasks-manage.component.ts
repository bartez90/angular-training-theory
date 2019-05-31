import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../common/tasks.service';
import { Task } from '../common/task.model';

@Component({
    selector: 'app-tasks-manage',
    templateUrl: './tasks-manage.component.html',
    styleUrls: ['./tasks-manage.component.scss'],
    // providers: [TasksService]
})
export class TasksManageComponent implements OnInit {
    tasks: Task[] = [];
    taskSelected = false;
    selectedTask: Task;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tasksService: TasksService
    ) { }

    ngOnInit() {
        this.tasks = this.tasksService.getTasks();
    }

    onTaskSelect(task: Task) {
        this.taskSelected = true;
        this.selectedTask = task;

        this.router.navigate([task.id, 'view'], {relativeTo: this.route});
        // this.router.navigate(['/tasks-manage', '2', 'view']);
    }

}
