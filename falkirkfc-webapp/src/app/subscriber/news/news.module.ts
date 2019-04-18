import { NgModule } from "@angular/core";
import { ArticleComponent } from './article/article.component';
import { NewsListComponent } from './news-list/news-list.component';



@NgModule({
    declarations: [
        ArticleComponent,
        NewsListComponent
    ]
})


export class NewsModule { }