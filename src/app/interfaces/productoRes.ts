import { Producto } from './producto'

export interface productoRespuesta {
    products: Producto[];
    total: number;
    skip: number;
}