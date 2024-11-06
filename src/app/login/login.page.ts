import { Component } from '@angular/core';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servicios/auth/auth.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements ViewWillEnter, ViewDidLeave {
  public formulario!: FormGroup;
  public cargandoBloqueo: boolean = false;
  public subCargando!: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    ) {
    this.formulario = fb.group({
      nombreUsuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    })
    }

  public validarFormulario(){
      const esValido = this.formulario.valid;
      if(!esValido){
        return
      }
      const datos = this.formulario.getRawValue();
      const nombreUsuario = datos['nombreUsuario'];
      const contrasena = datos['contrasena'];
      this.auth.iniciarSesion(nombreUsuario, contrasena);
  }
  ionViewWillEnter(): void {
    this.subCargando = this.auth.cargando.subscribe(nuevoValor =>{
      this.cargandoBloqueo = nuevoValor;
    })
  }
  ionViewDidLeave(): void {
    if(this.subCargando){
      this.subCargando.unsubscribe();
    }
  }

  

}
