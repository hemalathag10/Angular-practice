// announcements.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcements',
  template: `
    <h2>Announcements</h2>
    <div *ngFor="let announcement of announcements$ | async">
      <h4>{{ announcement.title }}</h4>
      <p>{{ announcement.content }}</p>
      <p>Date: {{ announcement.date | customDateFormat:'medium' }}</p>
      <hr />
    </div>
  `,
})
export class AnnouncementsComponent implements OnInit {
  announcements$ = this.announcementService.announcements$;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    // Fetch initial announcements or perform any necessary initialization
  }
}
