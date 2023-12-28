// src/app/task/task.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [AddTaskComponent, TaskListComponent],
  imports: [CommonModule, FormsModule],
  exports: [AddTaskComponent, TaskListComponent] // Ensure TaskListComponent is exported
})
export class TaskModule {}
