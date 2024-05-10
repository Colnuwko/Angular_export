import { Component } from '@angular/core';
import {CreatenewsComponent} from "../createnews/createnews.component";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-mainsheet',
  standalone: true,
  imports: [
    CreatenewsComponent,
    CardComponent
  ],
  templateUrl: './mainsheet.component.html',
  styleUrl: './mainsheet.component.css'
})
export class MainsheetComponent {

}
