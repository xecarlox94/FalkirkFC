import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/core/services/events/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  event: Event;
  eventsService: EventsService;

  constructor(eventsSrv: EventsService, router: Router, actRoute: ActivatedRoute) {
    this.eventsService = eventsSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.params.id;
    this.eventsService.getEvent(id).then( (event: Event) => this.event = event )
  }

}
