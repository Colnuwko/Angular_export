import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, BehaviorSubject} from 'rxjs';
import { NewsInt } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardsUrl = 'assets/data.json'; // Путь к вашему JSON-файлу
   public dataSubject = new BehaviorSubject<NewsInt[]>([]);
   data$: Observable<NewsInt[]> = this.dataSubject.asObservable();
  addNews(card: NewsInt) {

    const updatedData = [...this.dataSubject.getValue(), card];
    console.log(this.data$ );
    this.dataSubject.next(updatedData);
    this.data$ = this.dataSubject.asObservable();
    console.log(this.dataSubject);
    console.log(this.data$ );

  }

  constructor(private http: HttpClient) { }


  getNews(): Observable<NewsInt[]> {
     console.log(this.http.get<NewsInt[]>(this.cardsUrl));
     this.data$ = this.http.get<NewsInt[]>(this.cardsUrl);
     console.log(this.data$);
     return this.data$;
  }
  getCardsByNumber(ids: number[]): Observable<NewsInt[]> {
    return this.http.get<NewsInt[]>(this.cardsUrl).pipe(
      map((cards: NewsInt[]) => {
        return cards.filter(card => card.id !== undefined && ids.includes(card.id));
      })
    );
  }
}
