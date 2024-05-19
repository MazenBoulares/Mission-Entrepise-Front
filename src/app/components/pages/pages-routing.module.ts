import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'blog-page',
    loadChildren: () =>
      import('./blog-page/blog-page.module').then((m) => m.BlogPageModule),
  },
  {
    path: 'blog-detail',
    loadChildren: () =>
      import('./blog-details/blog-details.module').then(
        (m) => m.BlogDetailsModule
      ),
  },
  {
    path: 'breadcrumb',
    loadChildren: () =>
      import('./element-breadcrumb/element-breadcrumb.module').then(
        (m) => m.ElementBreadcrumbModule
      ),
  },
  {
    path: 'agency',
    loadChildren: () =>
      import('./agency/agency.module').then((m) => m.AgencyModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user-panel/user-panel.module').then(m => m.UserPanelModule)
  },
  {
    path: 'other-pages',
    loadChildren: () => import('./other-pages/other-pages.module').then(m => m.OtherPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
