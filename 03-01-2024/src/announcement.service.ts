// announcement.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private announcementsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public announcements$: Observable<any[]> = this.announcementsSubject.asObservable();

  constructor() {}

  addAnnouncement(announcement: any): void {
    const currentAnnouncements = this.announcementsSubject.getValue();
    this.announcementsSubject.next([...currentAnnouncements, announcement]);
  }
}
