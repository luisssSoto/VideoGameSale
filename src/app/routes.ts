import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AddNewOneComponent } from './add-new-one/add-new-one.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'most-downloaded',
      component: MostDownloadedComponent,
      title: 'Most Downloaded'
    },
    {
      path: 'coming-soon',
      component: ComingSoonComponent,
      title: 'Coming Soon'
    },
    {
      path: 'add-new-one',
      component: AddNewOneComponent,
      title: 'Add New Videogame'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register'
    }
  ];
  
  export default routeConfig;