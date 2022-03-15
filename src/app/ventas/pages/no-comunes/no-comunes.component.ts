import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  public persona1={
    nombre:'Jose',
    genero:'masculino',
    profesion:'analista programador',
    edad:21
  }

  public persona2={
    nombre:'Flavia',
    genero:'femenino'
  }

  public invitar ={
    masculino:'invitarlo',
    femenino:'invitarla'
  }

  public theGang:string[]=['charlie','mac','dennis','frank reynolds','sweet dee'];

  public bar={
    '=0':'Nadie en el bar',
    '=1':'Solo # en el bar',
    'other':'Hay # personas en el bar'
  }

  public miObserbable= interval(1000);

  public promesa =new Promise(
    (resolve,reject)=>{
      setTimeout(()=>{
        resolve('LLego la dataaaa');
      },3000)

    }
  );

  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    this.theGang=['charlie','mac','dennis','frank reynolds','sweet dee'];
  }
  quitar(){
    this.theGang.pop();
  }
}
