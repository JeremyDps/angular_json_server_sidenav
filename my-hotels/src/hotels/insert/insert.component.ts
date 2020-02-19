import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotels } from 'src/app/shared/models/hotels';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  tabHotel = {};

  newHotel$: Observable<Hotels[]>;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  afficher(form: NgForm): void {
    console.log('Récéption du formulaire');
    this.tabHotel['id'] = '';
    this.tabHotel['name'] = form.value['name'];
    this.tabHotel['etoiles'] = form.value['etoiles'];
    this.tabHotel['note'] = form.value['note'],
    this.tabHotel['ville'] = form.value['ville'];
    console.log(this.tabHotel);

    this.add();
  }

  add(): void {
    this.newHotel$ = this.hotelService.post(this.tabHotel);

    console.log(this.newHotel$.subscribe({
      next: result => {
        console.log(this.tabHotel);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {console.log('finish getHotel '); }
    }));
  }

}
