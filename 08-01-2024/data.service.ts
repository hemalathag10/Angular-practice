// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private publishedData: any[] = [];

  addPublishedData(data: any) {
    this.publishedData.push(data);
  }

  getPublishedData() {
    return this.publishedData;
  }
}
