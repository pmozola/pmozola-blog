import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { PageBase } from 'src/app/shared/page.base';
import { HeaderService } from 'src/app/shared/header/header.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent extends PageBase implements OnInit {

  id: any;
  blogDetail: Blog | null = null;

  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router, headerService:HeaderService) {
    super(headerService, "BLOG DETAIL PAGE","assets/images/landingpage/banner-bg2.jpg", " We are Small Team of Creative People working together");
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];

  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }

}
