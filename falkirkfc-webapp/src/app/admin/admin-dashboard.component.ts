import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  // defines admin tab links
  tabLinks: { path: string, label: string}[] = [
    {
      path: "news",
      label: "News"
    },
    {
      path: "events",
      label: "Events"
    },
    {
      path: "teams",
      label: "Teams"
    },
    {
      path: "matches",
      label: "Matches"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
