import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostViewResolver } from './blog-post-view/blog-post-view-resolver';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';

const routes: Routes = [
  { path: ':id', component: BlogPostViewComponent, resolve: { data: BlogPostViewResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
