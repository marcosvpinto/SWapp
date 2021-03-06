import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpeciesServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpeciesServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SpeciesServiceProvider Provider');
  }

  load(){
    return this.http.get('http://swapi.co/api/species/').map(res=>res.json());
  }

}
