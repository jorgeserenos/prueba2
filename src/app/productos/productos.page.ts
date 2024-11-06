import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../servicios/auth/producto/productos.service';
import { Producto } from './../interfaces/producto';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements ViewWillEnter,ViewDidLeave  {
  public productos: Producto[] = [];
  private subProucto!: Subscription;
  constructor(
    private prdS: ProductosService,
  ) {

  }

  ionViewDidLeave(): void {
    if(this.subProucto){
      this.subProucto.unsubscribe();
    }
  }

  ionViewWillEnter(): void {
    this.subProucto = this.prdS.producto.subscribe(productos => {
      this.productos = productos;
    });
    this.prdS.listarProductos();
  }


  public siguiente(){
    this.prdS.siguientesProductos();
  }

  public anterior(){
    this.prdS.productosAnterior();
  }
}

