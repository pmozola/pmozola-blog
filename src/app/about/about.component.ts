import { Component } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { PageBase } from '../shared/page.base';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends PageBase {
  constructor(headerService: HeaderService) {
    super(headerService, "O mnie", "assets/images/landingpage/banner-bg2.jpg");
  }
}
