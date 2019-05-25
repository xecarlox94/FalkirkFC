import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/core/models/event.model';
import { EventsService } from 'src/app/core/services/events/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  actRoute: ActivatedRoute;
  eventService: EventsService;
  events: Event[];

  constructor(actRoute: ActivatedRoute, eventService: EventsService) {
    this.actRoute = actRoute;
    this.eventService = eventService;
  }

  ngOnInit() {
    this.eventService.getEvents()
        .then( (events: Event[]) => this.events = events )
        .catch( (err) => console.log(err))
  }

}
