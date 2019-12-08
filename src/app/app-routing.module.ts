import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from './event.component';


const routes: Routes = [
  {
    path: ':id/:slug',
    component: EventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
