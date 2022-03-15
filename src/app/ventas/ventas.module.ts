import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { FormsModule } from '@angular/forms';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    OrdenarPipe
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VentasModule { }
