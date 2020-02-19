import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotels } from 'src/app/shared/models/hotels';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../services/hotels.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  // tableau associatif vide qui contiendra les infos du formulaires
  tabHotel = {};

  newHotel$: Observable<Hotels[]>;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // affichage des clés comme dans le json
  // les champ prennent comme valeur le texte du formulaire
  afficher(form: NgForm): void {

    this.tabHotel['id'] = '';
    this.tabHotel['name'] = form.value['name'];
    this.tabHotel['etoiles'] = form.value['etoiles'];
    this.tabHotel['note'] = form.value['note'],
    this.tabHotel['ville'] = form.value['ville'];

    this.add();
  }

  // appelle la méthode du service qui ajoute un nouvel hotel
  add(): void {
    this.newHotel$ = this.hotelService.post(this.tabHotel);

    console.log(this.newHotel$.subscribe({
      next: result => {
        console.log(this.tabHotel);
        this.openSnackBar();
        this.redirect();
      },
      error: err => {
        console.log(err);
      },
      complete: () => {console.log('finish getHotel '); }
    }));
  }

  openSnackBar() {
    this.snackBar.open('L\'hotel a été crée avec succès', '', {
      duration: 2000,
    });
  }

  redirect(): void {
    this.router.navigate(['/hotels']);
  }

}
