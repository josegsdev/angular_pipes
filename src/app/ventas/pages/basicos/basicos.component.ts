import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  public frase:string='ejemplo pipEs para forMateo de TextO';
  public fecha:Date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
