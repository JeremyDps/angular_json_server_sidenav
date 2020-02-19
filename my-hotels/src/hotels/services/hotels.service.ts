import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class HotelsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  // get sert à récupérer un tableau d'hotels sur l'URL spécifiée (il faut lancer le serveur JSON)
  get(id?: number): Observable<Hotels[]> {
    if (id) {
      return this.http.get<Hotels[]>('http://localhost:3000/hotels/' + id);
    } else {
      return this.http.get<Hotels[]>('http://localhost:3000/hotels');
    }
  }

  delete(id: number): Observable<Hotels[]> {
    return this.http.delete<Hotels[]>('http://localhost:3000/hotels/' + id);
  }

  put(id: number, hotel: Hotels[]) {
    console.log('dans le service');
    return this.http.put<Hotels[]>('http://localhost:3000/hotels/' + id, hotel, this.httpOptions);
  }
}

