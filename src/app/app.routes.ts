import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";


export const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(mod => mod.PricingComponent)
  },
  {
    path: 'become-customer', loadComponent: () => import('./pages/customer/customer.component').then(mod => mod.CustomerComponent)
  }
];
