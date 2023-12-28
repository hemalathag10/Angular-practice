// src/app/task/task-list/task-list.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <div>
      <h2>Task List</h2>
      <ul>
        <li *ngFor="let task of tasks">{{ task }}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
}
