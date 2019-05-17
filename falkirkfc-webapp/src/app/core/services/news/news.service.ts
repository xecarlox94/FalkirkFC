import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../../models/news.model';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: "root"
})


export class NewsService {
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    createArticle(article: News){
        return this.http.post<News>(`${ environment.baseURL }/news`, article).pipe(
            map( (value: any) => new News(value.news.title, value.news.subtitle, value.news.topic, value.news.time, value.news.body, value.news._id) )
        ).toPromise()
    }

    getNewsletter(){
        return this.http.get<News[]>(`${ environment.baseURL }/news`).pipe(
            map( (values: any) => {
                const newsJSON = values.newsLetter;
                const newsLetter: News[] = []
                for (let i = 0; i < newsJSON.length; i++) {
                    newsLetter[i] = new News(newsJSON[i].title, newsJSON[i].subtitle, newsJSON[i].topic, newsJSON[i].time, newsJSON[i].body, newsJSON[i]._id)
                }
                return newsLetter
            })
        ).toPromise()
    }

    getArticle(id: string){
        return this.http.get<News>(`${ environment.baseURL }/news/${ id }`).pipe(
            map( (value: any) => new News(value.news.title, value.news.subtitle, value.news.topic, value.news.time, value.news.body, value.news._id) )
        ).toPromise()
    }

    updateArticle(news: News){
        return this.http.patch<News>(`${ environment.baseURL }/news/${ news._id }`, news).pipe(
            map( (value: any) => new News(value.news.title, value.news.subtitle, value.news.topic, value.news.time, value.news.body, value.news._id) )
        ).toPromise()
    }

    deleteArticle(news: News){
        return this.http.delete<News>(`${ environment.baseURL }/news/${ news._id }`).pipe(
            map( (value: any) => new News(value.news.title, value.news.subtitle, value.news.topic, value.news.time, value.news.body, value.news._id) )
        ).toPromise()
    }
}