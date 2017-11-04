import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy-Search';
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  apiLink = '';
  giphes = [];
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  performSearch(searchTerm: HTMLInputElement): void {
    this.apiLink = this.link + searchTerm.value;
    this.http.request(this.apiLink).subscribe((res: Response) => {
      this.giphes = res.json().data;
      console.log(res.json());
    });
  }
}
