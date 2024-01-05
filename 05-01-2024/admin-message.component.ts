// admin-message.component.ts
import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-admin-message',
  template: `
    <div class="message-container">
      <h2>Admin Messages</h2>
      <div *ngFor="let message of messages" class="message" [ngClass]="{'sender': message.sender === 'admin', 'receiver': message.sender === 'employee'}">
        <p>{{ message.content }}</p>
        <small *ngIf="message.sender === 'employee'">From Employee</small>
        <small *ngIf="message.sender === 'admin'">You</small>
        <hr />
      </div>

      <div class="message-input">
        <label for="adminMessage">Your Response:</label>
        <textarea id="adminMessage" [(ngModel)]="adminMessage" name="adminMessage" required></textarea>
        <button (click)="sendResponse()">Send</button>
      </div>
    </div>
  `,

})
export class AdminMessageComponent {
  messages: any[] = [];
  adminMessage: string = '';

  constructor(private messageService: MessageService) {
    this.messageService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  sendResponse(): void {
    const message = {
      content: this.adminMessage,
      sender: 'admin',
      receiver: 'employee',
    };
    this.messageService.addMessage(message);
    this.adminMessage = '';
  }
}
