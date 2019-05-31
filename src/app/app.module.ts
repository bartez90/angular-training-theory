import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskItemComponent } from './tasks-list/task-item/task-item.component';
import { HighlightDirective } from './common/highlight.directive';
import { TasksManageComponent } from './tasks-manage/tasks-manage.component';
import { TaskViewComponent } from './tasks-manage/task-view/task-view.component';
import { TaskEditComponent } from './tasks-manage/task-edit/task-edit.component';
import { TasksService } from './common/tasks.service';


@NgModule({
    declarations: [
        AppComponent,
        TasksListComponent,
        TaskItemComponent,
        HighlightDirective,
        TasksManageComponent,
        TaskViewComponent,
        TaskEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [TasksService],
    bootstrap: [AppComponent]
})


export class AppModule { }
