// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messagesSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]> = this.messagesSubject.asObservable();

  private responseMessagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public responseMessages$: Observable<string[]> = this.responseMessagesSubject.asObservable();

  constructor() {}

  addMessage(message: Message): void {
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, message]);
  }

  updateMessage(response: string, originalMessage: Message): void {
    const updatedMessages = this.messagesSubject.value.map((message) =>
      message === originalMessage
        ? { ...message, content: response }
        : message
    );
    this.messagesSubject.next(updatedMessages);

    if (response.includes('Accepted') || response.includes('Rejected')) {
      const currentResponses = this.responseMessagesSubject.value;
      this.responseMessagesSubject.next([...currentResponses, response]);
    }
  }
}
