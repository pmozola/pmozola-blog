import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    BlogPostViewComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forChild(),
  ]
})
export class BlogModule { }
