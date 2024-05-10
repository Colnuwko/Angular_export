import { Component } from '@angular/core';
import { CreatenewsComponent } from "../createnews/createnews.component";
import { CardNewsComponent } from '../card-news/card-news.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NewsInt } from '../interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mainsheet',
  standalone: true,
  imports: [
    CreatenewsComponent,
    CardNewsComponent,
    NgFor
  ],
  templateUrl: './mainsheet.component.html',
  styleUrl: './mainsheet.component.css'
})
export class MainsheetComponent {
  news: NewsInt[] = [];
  constructor(private router: Router, private newsService: DataService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (data: NewsInt[]) => {
        this.news = data;
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}
