import { Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './features/user/home/home.component';
import { ProfileComponent } from './features/user/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'user-home',
    component: HomeComponent,
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./features/authentication/auth.routes').then((m) => m.authRoutes),
  },
];
