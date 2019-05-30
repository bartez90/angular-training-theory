import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskItemComponent } from './tasks-list/task-item/task-item.component';
import { HighlightDirective } from './common/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskItemComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
