import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class HotelsService {

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
}

