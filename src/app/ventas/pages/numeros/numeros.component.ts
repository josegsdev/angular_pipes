import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  public numero:number=3.1416;
  public cur:number=1380000;
  public percent:number=0.3556989;



  constructor() { }

  ngOnInit(): void {
  }
  

}
