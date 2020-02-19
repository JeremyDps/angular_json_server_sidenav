import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
//import { ConsoleReporter } from 'jasmine';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() nameHotel: string;
  @Input() starsHotel: number;
  @Input() voteHotel: number;
  @Input() city: string;

  idHotel: number;

  tabHotel: Hotels[];

  // contient l'hotel que l'on veut modifier
  getHotel$: Observable<Hotels[]>;

  // contient les nouvelles informations
  updateHotel$: Observable<Hotels[]>;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute,
              private router: Router, private snackBar: MatSnackBar,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.params.id;

    // récupéertation des infos actuelles de l'hotel pour pouvoir l'afficher dans le placeholder
    this.getHotel$ = this.hotelService.get(this.idHotel);
    console.log(this.getHotel$.subscribe({
      next: result => {
        this.tabHotel = result;
        console.log(this.tabHotel);
        this.getValeursForForm();
      },
      error: err => {
        console.log(err);
      },
      complete: () => {console.log('finish getHotel '); }
    }));
  }

  // changement des infos + appel de la méthode put
  afficher(form: NgForm) {

   this.tabHotel['name'] = form.value['name'];
   this.tabHotel['etoiles'] = form.value['etoiles'];
   this.tabHotel['note'] = form.value['note'];
   this.tabHotel['ville'] = form.value['ville'];

   this.updateHotel$ = this.hotelService.put(this.idHotel, this.tabHotel);

   console.log(this.updateHotel$.subscribe({
    next: result => {
      console.log('Je suis un message de succès');
      console.log(this.tabHotel);
      this.openSnackBar();
      this.redirect();
    },
    error: err => {
      console.log('je suis une grosse erreur');
    },
    complete: () => {console.log('finish update '); }
  }));
  }

  getValeursForForm(): void {
      this.nameHotel = this.tabHotel['name'];
      this.starsHotel = this.tabHotel['etoiles'];
      this.voteHotel = this.tabHotel['note'];
      this.city = this.tabHotel['ville'];
  }

  openSnackBar() {
    this.snackBar.open("L'hotel a été modifié avec succès", '', {
      duration: 2000,
    });
  }

  redirect(): void {
    this.router.navigate(['/hotels']);
  }

}
