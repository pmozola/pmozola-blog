import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BlogPostViewResolver implements Resolve<BlogPostResolveData> {
    constructor(private httpClient: HttpClient,
        private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPostResolveData> {
        return this.httpClient.get('assets/blog/post/' + route.paramMap.get('id') + '.md', { responseType: 'text' })
            .pipe(
                map((text: string) => this.getMetadata(text)),
                catchError(error => {
                    this.router.navigate(["/404"]);
                    return of({} as BlogPostResolveData);
                })
            )
    }

    private getMetadata(text: string): BlogPostResolveData {

        let delimiter = '---';
        let index = text.indexOf(delimiter, text.indexOf(delimiter) + 1);
        let metadata = text.substring(0, index + 3);

        let data = metadata.split(`\r\n`);

        return {
            pageTitle: data.filter(x => x.includes('title'))[0].split('title: ')[1],
            pageSubtitle: data.filter(x => x.includes('subtitle'))[0]?.split('subtitle: ')[1],
            pageImage: data.filter(x => x.includes('image'))[0].split('image: ')[1],
            pageText: text.substring(index + 3)
        } as BlogPostResolveData
    }
}

export interface BlogPostResolveData {
    pageTitle: string;
    pageSubtitle: string;
    pageImage: string;
    pageText: string;
}
