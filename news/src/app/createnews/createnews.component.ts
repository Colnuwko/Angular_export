import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {coment, NewsInt} from "../interfaces";
import {NONE_TYPE} from "@angular/compiler";
class Card implements NewsInt {
  author: string;
  authorImg: string;
  coments: coment[];
  datapublich: string;
  id: number;
  img: string;
  likes: number;
  text: string;
  views: number;

  constructor(author: string, authorImg: string, coments: coment[], datapublich: string, id: number, img: string,
              likes: number, text: string, views: number)
  {
    this.id = id;
    this.author=author;
    this.likes = likes;
    this.datapublich = datapublich;
    this.authorImg = authorImg;
    this.text = text;
    this.views = views;
    this.coments = coments;
    this.img = img;
  }

}
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
  text: string= "";
  filename: string = "";

  OnClick() {
    alert("Реализация этой кнопки стоит офера на джуна)) в тиньке например..");
  }
  constructor(private newsService: DataService) { }

  createNews(myForm: any,fileForm: any){
    this.text = myForm.value.textInput;
    this.filename = fileForm.value.file;
    let card = new Card("Людмила игоревна","assets/sara.png", [],"январь 24", 5, "", 5,this.text, 10);
    this.newsService.addNews(card);
  }
  AddedImage() {
    alert("нажато");
  }
  changelen(myForm: any){
    this.count = myForm.value.textInput.length;

  }
}
