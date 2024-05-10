import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  createNews(myForm: any,fileForm: any){
    this.text = myForm.value.textInput;
    this.filename = fileForm.value.file;
  }
  AddedImage() {
    alert("нажато");
  }
  changelen(myForm: any){
    this.count = myForm.value.textInput.length;

  }
}
