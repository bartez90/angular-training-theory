import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
