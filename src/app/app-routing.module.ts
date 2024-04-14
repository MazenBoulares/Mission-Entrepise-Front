import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';
import { content } from './shared/routes/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'theme/slider-filter-search',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: content
  },
  {
    path: '**',
    redirectTo: 'page/other-pages/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
