import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  tabLinks: { path: string, label: string}[] = [
    {
      path: "table",
      label: "Table"
    },
    {
      path: "fixtures",
      label: "Fixtures"
    },
    {
      path: "match",
      label: "Match?"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
