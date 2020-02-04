import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Noticia } from 'src/app/modelo/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias = new Array();

  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit() {

    this
      .noticiasService
      .getNoticias()
      .subscribe((data: Noticia) => {
        //console.log(data);
        this.noticias = data.articles;
        console.log(this.noticias);
    });

  }

}
