import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../servicios/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  public emailUser: string = "";

  admin: boolean = false;

  constructor(private authService: AuthServiceService, private afsAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
        console.log(auth.email);
        this.emailUser = auth.email;
        
        if (auth.email == 'cobosmdc@gmail.com') {
          this.admin = true;
        }

      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afsAuth.auth.signOut();
    this.admin = false;
    this.router.navigate(['/principal']);
  }

}
