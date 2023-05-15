import { Routes } from '@angular/router';

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
  }
];

export default routes;
