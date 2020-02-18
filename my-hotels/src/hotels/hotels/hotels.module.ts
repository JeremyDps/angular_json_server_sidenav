import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsService } from '../services/hotels.service';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DetailsModule } from '../details/details.module';


@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [
    HotelsComponent
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule { }
