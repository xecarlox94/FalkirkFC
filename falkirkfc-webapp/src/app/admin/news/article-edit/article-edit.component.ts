import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news/news.service';
import { News } from 'src/app/core/models/news.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  formBuilder: FormBuilder;
  editMode: boolean;
  actRoute: ActivatedRoute;
  router: Router;
  newsService: NewsService;
  article: News;
  articleForm: FormGroup;

  

  constructor(newsSrv: NewsService, router: Router, actRoute: ActivatedRoute, formBuilder: FormBuilder) {
    this.newsService = newsSrv;
    this.router = router;
    this.actRoute = actRoute;
    this.formBuilder = formBuilder;
    this.articleForm = this.formBuilder.group({
      'title': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(35)] ],
      'subtitle': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(45)] ],
      'topic': [ null, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ] ],
      'body': [ null, [Validators.required, Validators.minLength(45) ] ]
    })
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.params["id"];
    if(id){
      this.editMode = true;
      this.newsService.getArticle(id)
          .then( (article: News) => {
            this.article = article
            this.articleForm.patchValue(this.article)
          })
          .catch( () => {
            this.returnToNewsList()
          })
    } else {
      this.editMode = false;
    }
  }

  onSubmit(){
    const val = this.articleForm.value;
    const article = new News(val.title, val.title, val.topic, Date.now().toString(), val.body)

    if(this.editMode){
      article.setId(this.article._id)
      this.newsService.updateArticle(article)
          .then( (news: News) => this.router.navigate([ "../../" , this.article._id ], { relativeTo: this.actRoute }) )
          .catch( (err) => this.returnToNewsList() )
    } else {
      this.newsService.createArticle(article)
          .then( (news: News) => this.router.navigate([ "../" , this.article._id ], { relativeTo: this.actRoute }) )
          .catch( (err) => this.returnToNewsList() )
    }
  }


  returnToNewsList(){
    this.router.navigate(["/adminDashboard", "news"])
  }

}
