import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { QLoansHomeComponent } from './components/home/qloans.home.component';
import { QLoansAboutComponent } from './components/about/qloans.about.component';
import { QLoansTestimonialsComponent } from './components/testimonials/qloans.testimonials.component';
import { QLoansServicesComponent } from './components/services/qloans.services.component';
import { QLoansContactComponent } from './components/contact/qloans.contact.component';
import { QLoansContactResultComponent } from './components/contact/qloans.contact.result.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: QLoansHomeComponent },
    { path: 'testimonials',     component: QLoansTestimonialsComponent },
    // { path: 'about',            component: QLoansAboutComponent },
    { path: 'contact',          component: QLoansContactComponent },
    { path: 'contact/:result',  component: QLoansContactResultComponent },
    { path: 'services',         component: QLoansServicesComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
