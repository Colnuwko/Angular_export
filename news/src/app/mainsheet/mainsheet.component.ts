import { Component } from '@angular/core';
import { CreatenewsComponent } from "../createnews/createnews.component";
import { CardNewsComponent } from '../card-news/card-news.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NewsInt } from '../interfaces';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainsheet',
  standalone: true,
  imports: [
    CreatenewsComponent,
    CardNewsComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './mainsheet.component.html',
  styleUrl: './mainsheet.component.css'
})
export class MainsheetComponent {
  data!: NewsInt[];
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSubscription = this.dataService.news$.subscribe(data => {
      this.data = data;
    });
    this.dataService.fetchDataFromJSON();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
