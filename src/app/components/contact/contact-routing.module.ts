import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUs1Component } from './contact-us1/contact-us1.component';
import { ContactUs2Component } from './contact-us2/contact-us2.component';
import { ContactUs3Component } from './contact-us3/contact-us3.component';

const routes: Routes = [
  {
    path: 'contact-1',
    component: ContactUs1Component,
  },
  {
    path: 'contact-2',
    component: ContactUs2Component,
  },
  {
    path: 'contact-3',
    component: ContactUs3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
