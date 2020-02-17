import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.ajax({
      url: "http://localhost/DWEC/ANGULAR/Padel/src/app/api/test.php",
      method: 'GET',
      dataType: 'json',
      data: {}
    }).done(function (result) {
      console.log(result);
    });

    /*
    $.get("api/test.php",
      function (respuestaJson) {
      }
    ).done(function (respuestaJson) {
      console.log(respuestaJson);
    }
    ).fail(function () {
      alert("Falla");
      console.log("Falla");
    }
    )
    */
  }

}
