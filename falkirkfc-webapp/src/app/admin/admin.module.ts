import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})


export class AdminDashboardModule { }