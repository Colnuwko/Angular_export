import { Component, Input } from '@angular/core';
import { NewsInt, Сoment } from '../interfaces';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-news',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.css'
})
export class CardNewsComponent {
  @Input() card!: NewsInt;

  formData = { search: '', };
  showComments = false;
  constructor(private dataService: DataService) { }
  submitForm(event: Event) {
    event.preventDefault();
    const newComent: Сoment = { user: 'Sara Jones', comment: this.formData.search };
    this.dataService.addComentToNewsById(this.card.id, newComent);
    this.formData.search = '';
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }
  addLike() {
    this.dataService.addLikeById(this.card.id);
  }
  toggleTrue() {
    this.showComments = true;
  }
}
