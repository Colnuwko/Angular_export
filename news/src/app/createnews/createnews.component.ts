import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DataService } from "../services/data.service";
import { NewsInt } from "../interfaces";


@Component({
  selector: 'app-createnews',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './createnews.component.html',
  styleUrl: './createnews.component.css'
})

export class CreatenewsComponent {
  count: number = 0;
  text: string = "";
  filename: string = "";
  OnClick() {
    alert("Реализация этой кнопки стоит офера на джуна)) в тиньке например..");
  }
  constructor(private newsService: DataService) { }

  createNews(myForm: any, fileForm: any) {
    this.text = myForm.value.textInput;
    this.filename = myForm.value.filename;
    const card: NewsInt = { "id": 0, "img": this.filename, "text": this.text, "author": "Sara Jones", "authorImg": "assets/navbar/sara.png", "datapublich": "2024-05-09", "coments": [], "likes": 1, "views": 1 }
    this.newsService.addNews(card);
    myForm.reset();
  }
  AddedImage() {
    alert("нажато");
  }
  changelen(myForm: any) {
    this.count = myForm.value.textInput.length;

  }

}
