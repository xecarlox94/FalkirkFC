import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
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
      path: "matches",
      label: "Matches"
    },
    {
      path: "teams",
      label: "Teams"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
