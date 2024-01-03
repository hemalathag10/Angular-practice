// announcement-page.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcement-page',
  template: `
    <app-announcements></app-announcements>
  `,
})
export class AnnouncementPageComponent implements OnInit {
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    // Fetch initial announcements or perform any necessary initialization
  }
}
