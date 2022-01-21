import { HeaderService } from "./header/header.service";

export class PageBase {
    constructor(private headerService: HeaderService) {
    }

    public initPage(title: string, image: string, subtitle: string = '') {
        this.headerService.title = title;
        this.headerService.image = image;
        this.headerService.subtitle = subtitle
    }
}