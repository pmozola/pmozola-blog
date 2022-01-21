import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderService } from 'src/app/shared/header/header.service';
import { PageBase } from 'src/app/shared/page.base';
import { BlogPostResolveData } from './blog-post-view-resolver';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent extends PageBase implements OnInit {
  text: string = "";

  constructor(headerService: HeaderService, private route: ActivatedRoute) {
    super(headerService);
  }

  ngOnInit(): void {
    let resolverData = this.route.snapshot.data.data as BlogPostResolveData;

    this.initPage(resolverData.pageTitle, resolverData.pageImage, resolverData.pageSubtitle);
    this.text = resolverData.pageText;
  }
}
