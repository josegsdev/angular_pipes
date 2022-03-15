import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';


/* MANEJO DE IDIOMAS:
POR DEFECTO ES EN INGLES, PARA CAMBIAR ESTO SE ASIGNA A VARIABLE LA IMPORTACION DEL 'LOCALES/ES-CL',
SE REGISTRA CON EL 'REGISTERLOCALEDATA()' Y SE AGREGA A LOS 'PROVIDERS[]'.
PARA TENER OTROS LENGUAJES DISPONIBLES, NO DEFAULT, SE REPITE EL PROCESIMIENTO 
PERO SIN AGREGARLO A LOS PROVIDERS[]  */
import localChile from '@angular/common/locales/es-CL';
import localFRANCE from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'
registerLocaleData(localChile);
registerLocaleData(localFRANCE);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
