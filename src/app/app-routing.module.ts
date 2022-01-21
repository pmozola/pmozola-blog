import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog_old/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    { path: '', component: AboutComponent },
    { path: 'blogDetail/:id', component: BlogDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', loadChildren: () =>  import('./blog/blog.module').then(x => x.BlogModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
