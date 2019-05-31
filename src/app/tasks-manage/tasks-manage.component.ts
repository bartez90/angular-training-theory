import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tasks-manage',
    templateUrl: './tasks-manage.component.html',
    styleUrls: ['./tasks-manage.component.scss']
})
export class TasksManageComponent implements OnInit {
    tasks: string[] = ['task 1', 'task 2'];
    taskSelected = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onTaskSelect() {
        this.taskSelected = true;
        this.router.navigate(['2', 'view'], {relativeTo: this.route});
        // this.router.navigate(['/tasks-manage', '2', 'view']);
    }

}
