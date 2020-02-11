/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
*/
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../../servicios/auth-service.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService, private storage: AngularFireStorage) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',
            }).then(() => {
              this.router.navigate(['principal']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(){
    console.log("Login Google");
    /*
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['/noticias']);
    */

    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));

  }

  onLoginRedirect(): void {
    this.router.navigate(['/principal']);
  }

}
