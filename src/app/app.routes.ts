import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'imprint', component: ImprintComponent }, 
  { path: '**', redirectTo: '' }
];



