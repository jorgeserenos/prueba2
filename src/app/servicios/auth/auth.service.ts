import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioLog } from './../../interfaces/usuarioLog';
import { cuerpoUs } from 'src/app/interfaces/cuerpoLogin'; 
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login';
  public usuarioLog: usuarioLog | null = null;
  public accessToken: string | null = null;

  public $cargando = new BehaviorSubject<boolean>(false);
  public cargando = this.$cargando.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public iniciarSesion(
    nombreUsuario: string, contrasena: string
  ){
    const cuerpo: cuerpoUs = {
      username: nombreUsuario,
      password: contrasena
    }
    this.http.post<usuarioLog>(this.URL_LOGIN,JSON.stringify(cuerpo),{
      headers: {
        'Content-type': 'application/json'
      }
    })

    .subscribe(resultado => {
      this.usuarioLog = resultado;
      this.accessToken = resultado.accessToken;
      console.log(resultado);
      this.router.navigate(['/', 'productos'])
    });
  }

  public cerrarSesion(){
    if (this.usuarioLog){
      this.usuarioLog = null;
      this.accessToken = null;
    }
  }
}

