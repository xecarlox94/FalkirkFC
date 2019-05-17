import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from '../../models/event.model';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})


export class EventsService {
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    getEvents() {
        return this.http.get<Event[]>(`${ environment.baseURL }/events`).pipe(
            map( (values: any) => {
                const eventsJSON = values.events;
                const events: Event[] = [];
                for (let i = 0; i < eventsJSON.length; i++) {
                    events[i] = new Event(eventsJSON[i].title, eventsJSON[i].subtitle, eventsJSON[i].time, eventsJSON[i].body, eventsJSON[i]._id)
                }
                return events;
            })
        ).toPromise()
    }

    createEvent(event: Event){
        return this.http.post<Event>(`${ environment.baseURL }/events/`, event).pipe(
            map( (value: any) => new Event(value.event.title, value.event.subtitle, value.event.time, value.event.body, value.event._id) )
        ).toPromise()
    }

    getEvent(id: string){
        return this.http.get<Event>(`${ environment.baseURL }/events/${ id }`).pipe(
            map( (value: any) => new Event(value.event.title, value.event.subtitle, value.event.time, value.event.body, value.event._id) )
        ).toPromise()
    }

    updateEvent(event: Event){
        return this.http.patch<Event>(`${ environment.baseURL }/events/${ event._id }`, event).pipe(
            map( (value: any) => new Event(value.event.title, value.event.subtitle, value.event.time, value.event.body, value.event._id) )
        ).toPromise()
    }

    deleteEvent(event: Event){
        return this.http.delete<Event>(`${ environment.baseURL }/events/${ event._id }`).pipe(
            map( (value: any) => new Event(value.event.title, value.event.subtitle, value.event.time, value.event.body, value.event._id) )
        ).toPromise()
    }
}