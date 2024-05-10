import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewsInt } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardsUrl = 'assets/data.json'; // Путь к вашему JSON-файлу



  constructor(private http: HttpClient) { }


  getNews(): Observable<NewsInt[]> {
    return this.http.get<NewsInt[]>(this.cardsUrl);

  }
  getCardsByNumber(ids: number[]): Observable<NewsInt[]> {
    return this.http.get<NewsInt[]>(this.cardsUrl).pipe(
      map((cards: NewsInt[]) => {
        return cards.filter(card => card.id !== undefined && ids.includes(card.id));
      })
    );
  }
}
