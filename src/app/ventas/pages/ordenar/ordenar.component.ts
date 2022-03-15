import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interface/heroes';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

public ordenarPor:string='';
public heroes:Heroes[]=[
  {
    nombre:'superman',
    vuela:true,
    alterego:'clark kent',
    poder:100
  },
  {
    nombre:'batman',
    vuela:false,
    alterego:'bruce wayne',
    poder:99
  },
  {
    nombre:'flash',
    vuela:false,
    alterego:'barry allen',
    poder:80
  },
  {
    nombre:'Marcian Mahunter',
    vuela:true,
    alterego:'----',
    poder:70
  },
  {
    nombre:'Ciborg',
    vuela:true,
    alterego:'negro',
    poder:80
  }
]

  constructor() { }
  ngOnInit(): void {
  }

  ordenaPor(str:string){
    this.ordenarPor=str;
  }

}
