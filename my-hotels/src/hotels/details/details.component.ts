import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotels } from 'src/app/shared/models/hotels';
import { Observable } from 'rxjs';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  hotel: Hotels[];

  tableau: any[] ;

  name: number;

  displayedColumns: string[] = ['id', 'name', 'etoiles', 'note', 'ville', 'update', 'delete'];

  hotelDetails$: Observable<Hotels[]>;
  hotelDelete$: Observable<Hotels[]>;

  constructor(
    private hotelsService: HotelsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.id;
    this.hotelDetails$ = this.hotelsService.get(this.name);
    console.log(this.hotelDetails$.subscribe({
      next: result => {
        this.tableau = new Array(result);
        console.log(this.tableau);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {console.log('finish details '); }
    }));
  }

  remove(id: number): void {
    this.hotelDelete$ = this.hotelsService.delete(id);
    console.log(this.hotelDelete$.subscribe({
      next: result => {
        console.log(result);
      },
      error: err => {
        console.log(err);
      },
      complete: () => { console.log('delete finish'); }
    }));

    this.router.navigate(['/hotels/']);
  }

  update(id: number): void {
    console.log('lancemement de la page de modification');
    this.router.navigate(['/hotels/update/' + id]);
  }
}
