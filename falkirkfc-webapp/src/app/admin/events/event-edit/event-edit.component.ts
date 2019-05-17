import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/core/models/event.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  formBuilder: FormBuilder;
  editMode: boolean;
  eventForm: FormGroup;
  eventsService: EventsService;
  event: Event;

  constructor(router: Router, actRoute: ActivatedRoute, eventsSrv: EventsService, formBuilder: FormBuilder) {
    this.router = router;
    this.actRoute = actRoute;
    this.eventsService = eventsSrv;
    this.formBuilder = formBuilder;
    this.eventForm = this.formBuilder.group({
      'title': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(35) ] ],
      'subtitle': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(45) ] ],
      'body': [ null, [ Validators.required, Validators.minLength(45) ] ]
    })
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.params["id"];
    if(id) {
      this.editMode = true;
      this.eventsService.getEvent(id)
          .then( (event: Event) => {
            this.event = event
            console.log(this.event)
            this.eventForm.patchValue(this.event)
          })
          .catch( () => this.returnToEventsPage() )
    } else {
      this.editMode = false;
    }
  }


  onSubmit() {
    const val = this.eventForm.value;
    const event = new Event(val.title, val.subtitle, Date.now().toString(), val.body)

    if(this.editMode) {
      event.setId(this.event._id)
      this.eventsService.updateEvent(event)
          .then( (event: Event) => this.router.navigate([ "../../", this.event._id ], { relativeTo: this.actRoute }) )
          .catch( (err) => this.returnToEventsPage() )
    } else {
      this.eventsService.createEvent(event)
          .then( (event: Event) => this.router.navigate([ "../", this.event._id ], { relativeTo: this.actRoute }))
          .catch( (err) => this.returnToEventsPage() )
    }
  }

  returnToEventsPage(){
    this.router.navigate(["/adminDashboard", "events"])
  }

}
