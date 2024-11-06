import { Component } from '@angular/core';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servicios/auth/auth.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements ViewWillEnter, ViewWillLeave {
  pubic formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.formulario = fb.group({
      usuario: ['', [Validators.required]],
      contrasena: 
    })
   }
  ionViewWillLeave(): void {

  }
  ionViewWillEnter(): void {

  }

  ngOnInit() {
  }

}
