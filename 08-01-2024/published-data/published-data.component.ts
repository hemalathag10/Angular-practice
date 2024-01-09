// published-data.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-published-data',
  templateUrl: './published-data.component.html',
})
export class PublishedDataComponent {
  publishedData: any[];

  constructor(private dataService: DataService) {
    this.publishedData = dataService.getPublishedData();
  }

  transformObjectToArray(data: any): { key: string; value: any }[] {
    return Object.keys(data).map(key => ({ key, value: data[key] }));
  }
}
