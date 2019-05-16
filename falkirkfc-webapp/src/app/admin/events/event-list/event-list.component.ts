import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  actRoute: ActivatedRoute;
  router: Router;
  eventService: EventsService;
  events: Event[];

  constructor(eventService: EventsService, router: Router, actRoute: ActivatedRoute) {
    this.eventService = eventService;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    this.eventService.getEvents().then( (events: Event[]) => this.events = events )
  }

}
