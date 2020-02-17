import { AuthServiceService } from './../../servicios/auth-service.service';
import { MensajesService } from './../../servicios/mensajes.service';
import { Component, OnInit } from '@angular/core';
import { MensajeInterface } from 'src/app/modelo/mensaje';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensaje: MensajeInterface = {
    usuario: '',
    contenido: '',
    fecha: '',
    lugar: ''
  }

  admin: boolean = false;

  mensajes: MensajeInterface[];
  mensajesMoriles: MensajeInterface[];
  mensajesLucena: MensajeInterface[];
  mensajesMonturque: MensajeInterface[];

  constructor(private mensajeService: MensajesService, private authService: AuthServiceService) { }

  ngOnInit() {
    this.mensajeService.getMensajes().subscribe(mensajes => {
      this.mensajes = mensajes;
      console.log(mensajes);
    });
    this.mensajeService.getMensajesMoriles().subscribe(mensajes => {
      this.mensajesMoriles = mensajes;
      console.log(mensajes);
    });
    this.mensajeService.getMensajesLucena().subscribe(mensajes => {
      this.mensajesLucena = mensajes;
      console.log(mensajes);
    });
    this.mensajeService.getMensajesMonturque().subscribe(mensajes => {
      this.mensajesMonturque = mensajes;
      console.log(mensajes);
    });
    this.authService.isAuth().subscribe(auth => {
      if (auth.email == 'cobosmdc@gmail.com') {
        this.admin = true;
      }
    });
  }

  onGuardarMensaje(myForm: NgForm) {
    if (myForm.valid === true) {
      let currentUser = "";
      this.authService.isAuth().subscribe(auth => {
        currentUser = auth.email;

        this.mensaje.usuario = currentUser;
        const fechaNow = Date.now();
        this.mensaje.fecha = fechaNow;
        //console.log(this.mensaje);
        this.mensajeService.addMensaje(this.mensaje);
        myForm.resetForm();

      });
    } else {
      console.log("Algo va mal");
    }

  }

  borrarMensaje(id){
    console.log("Borrando: " + id);
    this.mensajeService.delMensaje(id);
  }

}
