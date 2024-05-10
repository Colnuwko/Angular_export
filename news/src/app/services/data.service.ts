import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsInt, Сoment } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private newsSubject = new BehaviorSubject<NewsInt[]>([]);
  public news$ = this.newsSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchDataFromJSON() {
    this.http.get<NewsInt[]>('assets/data.json')
      .subscribe(data => {
        this.newsSubject.next(data);
      });
  }

  addNews(news: NewsInt) {
    const currentNews = this.newsSubject.getValue();
    currentNews.push(news);
    this.newsSubject.next(currentNews);
  }

  addComentToNewsById(newsId: number, coment: Сoment) {
    const currentNews = this.newsSubject.getValue();
    const newsIndex = currentNews.findIndex(news => news.id === newsId);
    if (newsIndex !== -1) {
      if (!currentNews[newsIndex].coments) {
        currentNews[newsIndex].coments = [];
      }
      currentNews[newsIndex].coments.push(coment);
      this.newsSubject.next(currentNews);
    }
  }
  addLikeById(newsId: number) {
    const currentNews = this.newsSubject.getValue();
    const newsIndex = currentNews.findIndex(news => news.id === newsId);
    if (newsIndex !== -1) {
      currentNews[newsIndex].likes++; // Увеличиваем количество лайков на 1
      this.newsSubject.next(currentNews);
    }
  }

}
