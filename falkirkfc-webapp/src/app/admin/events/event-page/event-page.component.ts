import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
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


  editEvent(){
    this.router.navigate([ "../", "edit", this.event._id ], { relativeTo: this.actRoute })
  }

  deleteEvent(){
    this.eventsService.deleteEvent(this.event).then( () => this.router.navigate([ "../"], { relativeTo: this.actRoute }) )
  }

}
