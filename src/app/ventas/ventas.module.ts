import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { PipesComponent } from './pipes/pipes.component';
import { InterfacesComponent } from './interfaces/interfaces.component';



@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent,
    PipesComponent,
    InterfacesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent,

  ]
})
export class VentasModule { }
