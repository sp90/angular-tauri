import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes')
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.routes')
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export default routes;
