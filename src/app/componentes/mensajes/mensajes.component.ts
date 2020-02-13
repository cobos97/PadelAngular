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
    fecha: ''
  }

  mensajes: MensajeInterface[];

  constructor(private mensajeService: MensajesService, private authService: AuthServiceService) { }

  ngOnInit() {
    this.mensajeService.getMensajes().subscribe(mensajes => {
      this.mensajes = mensajes;
      console.log(mensajes);
  });
  }

  onGuardarMensaje(myForm: NgForm){
    if(myForm.valid === true){
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
    }else{
      console.log("Algo va mal");
    }
    
  }

}
