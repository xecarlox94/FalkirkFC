import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  newsService: NewsService;
  actRoute: ActivatedRoute;
  router: Router;
  article: News;


  constructor(newsService: NewsService, actRoute: ActivatedRoute, router: Router) {
    this.newsService = newsService;
    this.actRoute = actRoute;
    this.router = router;
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.params.id;
    this.newsService.getArticle(id).then( (article: News) => this.article = article )
  }

  editArticle(){
    this.router.navigate([ "../", "edit", this.article._id ], { relativeTo: this.actRoute })
  }

  deleteArticle(){
    this.newsService.deleteArticle(this.article).then( () => this.router.navigate([ "../"], { relativeTo: this.actRoute }) )
  }

}
