// employee-message.component.ts
import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-employee-message',
  template: `
    <div class="message-container">
      <h2>Employee Messages</h2>
      <div *ngFor="let message of messages" class="message" [ngClass]="{'sender': message.sender === 'employee', 'receiver': message.sender === 'admin'}">
        <p>{{ message.content }}</p>
        <small *ngIf="message.sender === 'admin'">From Admin</small>
        <small *ngIf="message.sender === 'employee'">You</small>
        <hr />
      </div>

      <div class="message-input">
        <label for="employeeMessage">Your Message:</label>
        <textarea id="employeeMessage" [(ngModel)]="employeeMessage" name="employeeMessage" required></textarea>
        <button (click)="sendMessage()">Send</button>
      </div>
    </div>
  `,
  
})
export class EmployeeMessageComponent {
  messages: any[] = [];
  employeeMessage: string = '';

  constructor(private messageService: MessageService) {
    this.messageService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage(): void {
    const message = {
      content: this.employeeMessage,
      sender: 'employee',
      receiver: 'admin',
    };
    this.messageService.addMessage(message);
    this.employeeMessage = '';
  }
}
