import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotels } from 'src/app/shared/models/hotels';
import { Observable } from 'rxjs';
import { HotelsService } from '../services/hotels.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // va contenir le tableau de l'hotel choisi
  hotel: Hotels[];

  // va contenir l'hotel choisi
  tableau: any[] ;

  name: number;

  displayedColumns: string[] = ['id', 'name', 'etoiles', 'note', 'ville', 'update', 'delete'];

  hotelDetails$: Observable<Hotels[]>;
  hotelDelete$: Observable<Hotels[]>;

  constructor(
    private hotelsService: HotelsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    // récupération de l'id
    this.name = this.route.snapshot.params.id;

    // récupération des infos de l'hotel
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

  // supprimer l'hotel
  remove(id: number): void {
    this.hotelDelete$ = this.hotelsService.delete(id);
    console.log(this.hotelDelete$.subscribe({
      next: result => {
        console.log(result);
        this.openSnackBar('L\'hotel a été supprimé avec succès');
        this.redirect();
      },
      error: err => {
        console.log(err);
      },
      complete: () => { console.log('delete finish'); }
    }));
  }

  openSnackBar(text: string) {
    this.snackBar.open(text, '', {
      duration: 2000,
    });
  }

  redirect(): void {
        this.router.navigate(['/hotels/']);
  }

  // renvoie vers le composant update
  update(id: number): void {
    this.router.navigate(['/hotels/update/' + id]);
  }
}
