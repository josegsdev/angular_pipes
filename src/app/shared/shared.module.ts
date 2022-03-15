import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRouterModule } from '../app-router.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRouterModule
  ]
})
export class SharedModule { }
