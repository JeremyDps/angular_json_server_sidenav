import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/models/hotels';
import { NgForm } from '@angular/forms';
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

  getHotel$: Observable<Hotels[]>;
  updateHotel$: Observable<Hotels[]>;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.params.id;
    console.log(this.idHotel);
    this.city = 'des valeur';

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

  afficher(form: NgForm) {
   console.log('formulaire envoyé ', this.idHotel + ' ' + form.value['ville']);
   this.tabHotel['name'] = form.value['name'];
   this.tabHotel['etoiles'] = form.value['etoiles'];
   this.tabHotel['note'] = form.value['note'];
   this.tabHotel['ville'] = form.value['ville'];
   console.log(this.tabHotel);
   this.updateHotel$ = this.hotelService.put(this.idHotel, this.tabHotel);

   console.log(this.updateHotel$.subscribe({
    next: result => {
      console.log('Je suis un message de succès');
      console.log(this.tabHotel);
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
      console.log(this.nameHotel);
      this.voteHotel = this.tabHotel['note'];
      this.city = this.tabHotel['ville'];
  }

  redirect(): void {
    this.router.navigate(['/hotels']);
  }

}
