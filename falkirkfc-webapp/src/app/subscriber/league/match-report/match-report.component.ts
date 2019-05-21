import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-match-report',
  templateUrl: './match-report.component.html',
  styleUrls: ['./match-report.component.scss']
})
export class MatchReportComponent implements OnInit {
  actRoute: ActivatedRoute;

  constructor(actRoute: ActivatedRoute) {
    this.actRoute = actRoute;
  }

  ngOnInit() {
    const queryParams = this.actRoute.snapshot.queryParams;
    console.log(queryParams)
  }

}
