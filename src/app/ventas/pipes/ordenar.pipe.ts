import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(hr:Heroes[], tp:string='nombre'): Heroes[] {

    switch (tp) {
      case 'nombre':
        hr= hr.sort( (a, b)=>(a.nombre > b.nombre)?1:-1);
      break;
      case 'vuela':
        hr= hr.sort( (a, b)=>(a.vuela > b.vuela)?-1:1);
      break;
      case 'alterego':
        hr= hr.sort( (a, b)=>(a.alterego > b.alterego)?1:-1);
      break;
      case 'poder':
        hr= hr.sort( (a, b)=>(a.poder > b.poder)?-1:1);
      break;                  
    }

    return hr;
  }

}
