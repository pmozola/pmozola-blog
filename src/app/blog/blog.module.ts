import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';


@NgModule({
  declarations: [
    BlogPostViewComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
