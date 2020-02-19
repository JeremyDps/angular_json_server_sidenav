import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ConsoleReporter } from 'jasmine';

@Injectable()
export class HotelsService {

  // headers servent à modifier et à créer
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient,
  ) { }

  // get sert à récupérer un tableau d'hotels sur l'URL spécifiée (il faut lancer le serveur JSON)
  get(id?: number): Observable<Hotels[]> {
    if (id) {
      return this.http.get<Hotels[]>('http://localhost:3000/hotels/' + id);
    } else {
      return this.http.get<Hotels[]>('http://localhost:3000/hotels');
    }
  }

  // supprimer hotel dont l'id est spécifié dans l'URL
  delete(id: number): Observable<Hotels[]> {
    return this.http.delete<Hotels[]>('http://localhost:3000/hotels/' + id);
  }

  // modifier hotel dont l'id est spécifié dans l'URL
  // il faut spécifier les headers pour pouvoir modifier
  put(id: number, hotel: Hotels[]) {
    console.log('dans le service');
    return this.http.put<Hotels[]>('http://localhost:3000/hotels/' + id, hotel, this.httpOptions);
  }

  // créer hotel
  // il faut spécifier les headers pour pouvoir modifier
  post(hotel: {}) {
    console.log('Dans le post');
    return this.http.post<Hotels[]>('http://localhost:3000/hotels', hotel, this.httpOptions);
  }
}

