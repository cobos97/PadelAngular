import { Injectable } from '@angular/core';
import { SocioInterface } from '../modelo/socio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SociosService {

  listaSocios: Observable<SocioInterface[]>;

  url = "http://localhost/DWEC/ANGULAR/Padel/src/app/api/test.php";
  urlInsert = "http://localhost/DWEC/ANGULAR/Padel/src/app/api/insert.php";
  urlEdit = "http://localhost/DWEC/ANGULAR/Padel/src/app/api/editSocio.php";
  urlDelete = "http://localhost/DWEC/ANGULAR/Padel/src/app/api/deleteSocio.php";

  constructor(private http: HttpClient) { }

  getSocios() {
    console.log('Listando socios');
    return this
      .http
      .get(`${this.url}`);
  }

  insertSocio(socio) {
    console.log('Insertando socio');
    console.log(socio);

    let dato_str_usuario = JSON.stringify(socio);
    console.log("Antes del get");
    $.get(this.urlInsert, JSON.parse(dato_str_usuario),
        function (respuestaJson) {
        }
    ).done(function (respuestaJson) {
            console.log("Vuelve");
            window.location.reload();
        }
    ).fail(function () {
            alert("Falla");
            console.log("Falla");
        }
    )

  }

  editSocio(socio) {

    console.log('Editando socio');
    console.log(socio);

    let dato_str_usuario = JSON.stringify(socio);
    console.log("Antes del get");
    $.get(this.urlEdit, JSON.parse(dato_str_usuario),
        function (respuestaJson) {
        }
    ).done(function (respuestaJson) {
            console.log("Vuelve");
            window.location.reload();
        }
    ).fail(function () {
            alert("Falla");
            console.log("Falla");
        }
    )

  }

  borrarSocio(id) {

    console.log('Borrando socio');
    console.log(id);

    var socio: SocioInterface = new Object();
    socio.id = id;

    let dato_str_usuario = JSON.stringify(socio);
    console.log("Antes del get");
    $.get(this.urlDelete, JSON.parse(dato_str_usuario),
        function (respuestaJson) {
        }
    ).done(function (respuestaJson) {
            console.log("Vuelve");
            window.location.reload();
        }
    ).fail(function () {
            alert("Falla");
            console.log("Falla");
        }
    )

  }


}
