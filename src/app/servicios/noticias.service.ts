import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "https://newsapi.org/v2/everything?q=padel&apiKey=2ad90e21d1aa459bae0cd62864e90cab&language=es";

  constructor(private http: HttpClient) {
   }

  getNoticias() {
    return this
            .http
            .get(`${this.url}`);
  }

}


