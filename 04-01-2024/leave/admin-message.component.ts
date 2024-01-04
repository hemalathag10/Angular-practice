// admin-message.component.ts
import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-admin-message',
  template: `
    <div>
      <h2>Admin Messages</h2>
      <div *ngFor="let message of messages" class="message">
        <p>{{ message.content }}</p>
        <div *ngIf="message.leave">
        <p>Employee Name: {{ message.leave.employeeName }}</p>
        <p>Employee Id: {{ message.leave.employeeId }}</p>

          <p>Leave Reason: {{ message.leave.reason }}</p>
          <p>Leave Days: {{ message.leave.days }}</p>
          <p>From: {{ message.leave.fromDate }} To: {{ message.leave.toDate }}</p>
        </div>
        <button *ngIf="message.sender === 'employee' && !message.content.includes('Accepted') && !message.content.includes('Rejected')" (click)="acceptMessage(message)">Accept</button>
        <button *ngIf="message.sender === 'employee' && !message.content.includes('Accepted') && !message.content.includes('Rejected')" (click)="rejectMessage(message)">Reject</button>
        <hr />
      </div>
    </div>
  `,
})
export class AdminMessageComponent {
  messages: any[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  acceptMessage(message: any): void {
    this.messageService.updateMessage('Leave Accepted', message);
  }

  rejectMessage(message: any): void {
    this.messageService.updateMessage('Leave Rejected', message);
  }
}
