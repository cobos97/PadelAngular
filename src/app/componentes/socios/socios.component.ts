import { MensajesService } from './../../servicios/mensajes.service';
import { SociosService } from './../../servicios/socios.service';
import { Component, OnInit } from '@angular/core';
import { SocioInterface } from 'src/app/modelo/socio';
import * as $ from 'jquery';
import { MensajeInterface } from 'src/app/modelo/mensaje';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {
  socio: SocioInterface = {
    nombre: '',
    apellidos: '',
    correo: '',
    lugar: ''
  }

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

  onGuardarSocio(myForm: NgForm) {
    console.log("Guardando socio");
    console.log(this.socio);

    this.sociosService.insertSocio(this.socio);

  }

  onEditSocio(id) {
    this.listaSocios.forEach(socio => {
      if (socio.id == id) {
        console.log(socio);
        this.socio = socio;
      }
    });
  }

  editarSocio(myForm: NgForm) {
    console.log("Editando socio");
    console.log(this.socio);

    this.sociosService.editSocio(this.socio);
  }

  onBorrarSocio(id) {
    console.log(this.socio);
    this.sociosService.borrarSocio(id);
  }

}
