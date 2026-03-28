import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";


export const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'features', loadComponent: () => import('./pages/features/features.component').then(mod => mod.FeaturesComponent)
  },
  {
    path: 'about', loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent)
  },
  {
    path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(mod => mod.FaqComponent)
  },
  {
    path: 'how-it-works', loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(mod => mod.HowItWorksComponent)
  },
  {
    path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(mod => mod.PricingComponent)
  },
  {
    path: 'become-customer', loadComponent: () => import('./pages/customer/customer.component').then(mod => mod.CustomerComponent)
  }
];
