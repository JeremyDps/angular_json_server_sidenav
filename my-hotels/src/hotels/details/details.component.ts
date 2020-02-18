import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotels } from 'src/app/shared/models/hotels';
import { Observable } from 'rxjs';
import { HotelsService } from '../services/hotels.service';
import { variable } from '../hotels/hotels.component';

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

  constructor(
    private hotelsService: HotelsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.id;
    this.hotelDetails$ = this.hotelsService.get(this.name);
    console.log(this.hotelDetails$.subscribe({
      next: result => {
        this.tableau = new Array(result);
        // console.log(this.tableau);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {console.log('finish details '); }
    }));
  }
}
