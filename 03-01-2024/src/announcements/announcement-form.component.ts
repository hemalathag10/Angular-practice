// announcement-form.component.ts
import { Component } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-form',
  template: `
    <h2>Add Announcement</h2>
    <form (submit)="addAnnouncement()">
      <label>Title:</label>
      <input [(ngModel)]="title" name="title" required />
      <br />
      <label>Content:</label>
      <textarea [(ngModel)]="content" name="content" required></textarea>
      <br />
      <label>Date:</label>
      <input type="datetime-local" [(ngModel)]="date" name="date" required />
      <br />
      <button type="submit">Add Announcement</button>
    </form>
  `,
})
export class AnnouncementFormComponent {
  title = '';
  content = '';
  date = '';

  constructor(private announcementService: AnnouncementService) {}

  addAnnouncement(): void {
    const announcement = {
      title: this.title,
      content: this.content,
      date: new Date(this.date),
    };
    this.announcementService.addAnnouncement(announcement);
    // Optionally, you can clear the form fields here
  }
}
