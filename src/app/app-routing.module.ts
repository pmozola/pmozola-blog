import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog_old/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    { path: '', component: AboutComponent },
    { path: 'blogDetail/:id', component: BlogDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(x => x.BlogModule) },
    { path: '404', component: NotFoundPageComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
