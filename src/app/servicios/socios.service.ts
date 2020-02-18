import { Injectable } from '@angular/core';
import { SocioInterface } from '../modelo/socio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class SociosService {

  listaSocios: Observable<SocioInterface[]>;

  url = "http://localhost/DWEC/ANGULAR/Padel/src/app/api/test.php";

  constructor(private http: HttpClient) {  }

  getSocios() {
    console.log('Listando socios');
    return this
            .http
            .get(`${this.url}`);
  }
  

}
