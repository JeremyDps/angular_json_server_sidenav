import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHotelsToolbarComponent } from './components/my-hotels-toolbar/my-hotels-toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    MyHotelsToolbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MyHotelsToolbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
