import { Component, Input } from '@angular/core';
import { NewsInt } from '../interfaces';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-card-news',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.css'
})
export class CardNewsComponent {
  @Input() card!: NewsInt;

  formData = { search: '', };

  submitForm(event: Event) {
    event.preventDefault();
    console.log(this.formData.search)

    this.formData.search = '';


  }
}
