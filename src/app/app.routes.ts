import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './rent-house/components/home/home.component';
import { AppComponent } from './app.component';
import { RentHouseComponent } from './rent-house/rent-house.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './rent-house/components/details/details.component';
import { AuthGuard } from './auth.guard';
import { ShoppingComponent } from './shopping/shopping.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Home page',
  },
  {
    path: 'rent-house',
    component: RentHouseComponent,
    title: 'rent house page',
    canActivate: [AuthGuard],
    children: [
      //lazy loading for setting standalone = true
      {
        path: '',
        loadComponent: () =>
          import('./rent-house/components/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'List of rent houses',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./rent-house/components/details/details.component').then(
            (m) => m.DetailsComponent
          ),
        title: 'Home details',
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./rent-house/components/form-data/form-data.component').then(
            (m) => m.FormDataComponent
          ),
        title: 'Add housing location',
      },
      // {
      //   path: '',
      //   component: HomeComponent,
      //   title: 'List of rent houses',
      // },
      // {
      //   path: 'details/:id',
      //   component: DetailsComponent,
      //   title: 'Home details',
      // },
    ],
  },
  // {
  //   path: 'shopping',
  //   loadChildren: () =>
  //     import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  //   title: 'Home details',
  // },
  {
    path: 'shopping',
    component: ShoppingComponent,
    title: 'Shopping page',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./shopping/shopping.module').then((m) => m.ShoppingModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Preloading Strategy
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
