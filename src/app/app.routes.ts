import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { GraphicComponent } from './components/graphic/graphic.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
