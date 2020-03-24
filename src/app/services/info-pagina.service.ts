import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})


export class InfoPaginaService {

  info: InfoPagina = {};
  cargadaInfo = false;
  equipo: any[] = [];
  cargadoEquipo = false;

  constructor(private http: HttpClient) {
     this.cargarInfo();
     this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        this.cargadaInfo = true;
        this.info = resp;
       // console.log( resp['twitter'] ); //funciona a pesar del warning
      }
    );
 }

  private cargarEquipo(){
    this.http.get('https://angular-html-a7f56.firebaseio.com/equipo.json').subscribe(
      (resp: any[]) => {
        this.cargadoEquipo = true;
        this.equipo = resp;
       // console.log(resp);
       // console.log( resp['twitter'] ); //funciona a pesar del warning
      }
    );

  }
}
