import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import { HotelsComponent } from 'src/hotels/hotels/hotels.component';
import { HotelsModule } from 'src/hotels/hotels/hotels.module';
import { DetailsModule } from 'src/hotels/details/details.module';
import { UpdateModule } from 'src/hotels/update/update.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HotelsModule,
    DetailsModule,
    UpdateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
