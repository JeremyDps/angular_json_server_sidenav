import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelsService } from '../services/hotels.service';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { Router } from '@angular/router';
export let variable: string;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})

export class HotelsComponent implements OnInit {

  hotel: Hotels[];

  displayedColumns: string[] = ['name', 'etoiles', 'ville', 'details'];

  hotels$: Observable<Hotels[]>;

  constructor(private hotelsService: HotelsService, private router: Router) {}

  ngOnInit(): void {
    variable = 'variable';
    this.hotels$ = this.hotelsService.get();
    console.log(this.hotels$.subscribe({
      next: result => {
          this.hotel = result;
          // console.log(result);
       },
      error: err => {console.log(err); },
      complete: () => {console.log('finish'); }
    }));
    }

  afficher(id: number) {
    this.router.navigate(['/hotels/' + id]);
  }
}
