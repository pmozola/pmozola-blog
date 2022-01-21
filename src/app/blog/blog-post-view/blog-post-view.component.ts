import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderService } from 'src/app/shared/header/header.service';
import { PageBase } from 'src/app/shared/page.base';
import { mergeMap, map } from 'rxjs/operators';
import { merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent extends PageBase implements OnInit {
  post: string = "";
  text: string = "";

  constructor(headerService: HeaderService, private route: ActivatedRoute, private httpClient: HttpClient) {
    super(headerService, "O mnie", "assets/images/landingpage/banner-bg2.jpg");
  }

  //TODO refactor - move to service or resolver
  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: Params) => {
          return params['id'] as string
        }),
        mergeMap((param: string) => this.httpClient.get('assets/blog/post/' + param + '.md', { responseType: 'text' }))
      )
      .subscribe(result => {
        this.text =
          this.assignMetadata(result);

      })
  }

  //TODO refactor - move to service or resolver
  private assignMetadata(text: string): string {

    let delimiter = '---';
    let index = text.indexOf(delimiter, text.indexOf(delimiter) + 1);
    let metadata = text.substring(0, index + 3);
    let result = text.substring(index + 3)
    console.log(metadata);
    console.log('sdssdsd');
    console.log(result);
    return result;
  }
}
