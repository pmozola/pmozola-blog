import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';

const routes: Routes = [
  { path: '', component: BlogPostViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
