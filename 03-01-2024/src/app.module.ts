// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDateFormatPipe } from './date-format.pipe';
import { AnnouncementsComponent } from './announcements/announcement.component';
import { AnnouncementFormComponent } from './announcements/announcement-form.component';
import { AnnouncementService } from './announcement.service';
import { AnnouncementPageComponent } from './announcement-page.component';

const routes: Routes = [
  { path: 'admin', component: AnnouncementFormComponent },
  { path: 'dashboard', component: AnnouncementPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomDateFormatPipe,
    AnnouncementsComponent,
    AnnouncementFormComponent,
    AnnouncementPageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [AnnouncementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
