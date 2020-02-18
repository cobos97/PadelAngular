import { MensajesService } from './../../servicios/mensajes.service';
import { SociosService } from './../../servicios/socios.service';
import { Component, OnInit } from '@angular/core';
import { SocioInterface } from 'src/app/modelo/socio';
import * as $ from 'jquery';
import { MensajeInterface } from 'src/app/modelo/mensaje';


@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  listaSocios: SocioInterface[];
  mensajes: MensajeInterface[];

  constructor(private sociosService: SociosService) { }

  ngOnInit() {

    this
      .sociosService
      .getSocios()
      .subscribe((data: SocioInterface) => {
        this.listaSocios = data.listaSocios;
        console.log(data.listaSocios);
    });

  }

}
