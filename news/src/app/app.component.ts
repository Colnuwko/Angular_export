import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainsheetComponent } from "./mainsheet/mainsheet.component";
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardNewsComponent, MainsheetComponent, NavbarComponent, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent {
  title = 'news';
}
