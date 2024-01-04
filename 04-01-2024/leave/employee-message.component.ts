// employee-message.component.ts
import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-employee-message',
  template: `
    <div>
      <h2>Employee Leave Request</h2>
      <label for="employeeName">Employee Name:</label>
      <input type="text" id="employeeName" [(ngModel)]="employeeName" required />

      <label for="employeeId">Employee Id</label>
      <input type="number" id="employeeId" [(ngModel)]="employeeId" required />

      <label for="leaveReason">Leave Reason:</label>
      <input type="text" id="leaveReason" [(ngModel)]="leaveReason" required />

      <label for="leaveDays">Leave Days:</label>
      <input type="number" id="leaveDays" [(ngModel)]="leaveDays" required />

      <label for="fromDate">From Date:</label>
      <input type="text" id="fromDate" [(ngModel)]="fromDate" required />

      <label for="toDate">To Date:</label>
      <input type="text" id="toDate" [(ngModel)]="toDate" required />

      <button (click)="sendMessage()">Send</button>

      <div *ngIf="responseMessages.length > 0">
        <h3>Response Messages</h3>
        <ul>
          <li *ngFor="let responseMessage of responseMessages">{{ responseMessage }}</li>
        </ul>
      </div>

      <div *ngIf="pendingMessages.length > 0">
        <h3>Pending Messages</h3>
        <ul>
          <li *ngFor="let pendingMessage of pendingMessages">{{ pendingMessage }}</li>
        </ul>
      </div>

      <div *ngIf="details">
        <h3>Details</h3>
        <p>Leave Reason: {{ details.leave?.reason }}</p>
        <p>Leave Days: {{ details.leave?.days }}</p>
        <p>From: {{ details.leave?.fromDate }} To: {{ details.leave?.toDate }}</p>
      </div>
    </div>
  `,
})
export class EmployeeMessageComponent {
  employeeName:string='';
  employeeId:number=0;
  leaveReason: string = '';
  leaveDays: number = 0;
  fromDate: string = '';
  toDate: string = '';
  responseMessages: string[] = [];
  pendingMessages: string[] = [];
  details: Message | null = null;

  constructor(private messageService: MessageService) {
    this.messageService.responseMessages$.subscribe((responses) => {
      this.responseMessages = responses;
      this.updatePendingMessages();
    });

    this.messageService.messages$.subscribe((messages) => {
      const employeeMessages = messages.filter((message) => message.sender === 'employee');
      this.details = employeeMessages.length > 0 ? employeeMessages[0] : null;
      this.updatePendingMessages();
    });
  }

  sendMessage(): void {
    const message = {
      content: 'Leave Request',
      sender: 'employee',
      receiver: 'admin',
      leave: {
        employeeName:this.employeeName,
        employeeId:this.employeeId,
        reason: this.leaveReason,
        days: this.leaveDays,
        fromDate: this.fromDate,
        toDate: this.toDate,
      },
    };
    this.messageService.addMessage(message);
    this.updatePendingMessages(); 
  }

  private updatePendingMessages(): void {
    this.pendingMessages = [];
    if (this.details && !this.responseMessages.includes('Accepted') && !this.responseMessages.includes('Rejected')) {
      this.pendingMessages.push('Pending: Leave request');
    } else {
      this.pendingMessages = []; 
    }
  }
}
