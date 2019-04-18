import { NgModule } from "@angular/core";
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';




@NgModule({
    declarations: [
        EventComponent,
        EventListComponent
    ]
})


export class EventsModule { }