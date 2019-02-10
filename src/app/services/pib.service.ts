import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pib } from '../model/pib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PibService {

private baseUrl = 'http://localhost:8080/project/getAllPibs';
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) {
    console.log('Servicio funcionando');
   }


  getAllPibs(): Observable<Pib[]>{
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Pib[])
    );
  }

}
