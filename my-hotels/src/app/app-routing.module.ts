import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from 'src/hotels/hotels/hotels.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DetailsComponent } from 'src/hotels/details/details.component';


const routes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotels/:id', component: DetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
