import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsService: NewsService;
  newsletter: News[]

  constructor(newsSrv: NewsService) {
    this.newsService = newsSrv;
  }

  ngOnInit() {
    this.newsService.getNewsletter()
        .then( (newsletter: News[]) => this.newsletter = newsletter )
  }

}
