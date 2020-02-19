import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HotelsService } from '../services/hotels.service';
import { HotelsModule } from '../hotels/hotels.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    HotelsModule,
    MatSnackBarModule
  ],
  exports: [
    DetailsComponent
  ],
  providers: [
    HotelsService
  ]
})
export class DetailsModule { }
