import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
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

}
