import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/shared/header/header.service';
import { PageBase } from 'src/app/shared/page.base';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent extends PageBase implements OnInit {
  post: string = "";

  constructor(headerService: HeaderService, private route: ActivatedRoute) {
    super(headerService, "O mnie", "assets/images/landingpage/banner-bg2.jpg");
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post = './assets/blog/post/' + params['id'] + '.md';
    });
  }
}
