// src/app/task/add-task/add-task.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <div>
      <h2>Add Task</h2>
      <input [(ngModel)]="newTask" placeholder="Enter task" />
      <button (click)="addTask()">Add</button>
    </div>
  `,
  styles: []
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTask = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
