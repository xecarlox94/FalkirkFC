import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/core/models/match.model';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  router: Router;
  matches: Match[];
  matchService: MatchService;
  teamService: TeamService;

  constructor(matchService: MatchService, teamService: TeamService, router: Router) {
    this.teamService = teamService;
    this.matchService = matchService;
    this.router = router;
  }

  ngOnInit() {
    this.loadMatches()
  }


  loadMatches(){
    this.matchService.fetchMatches().then( ( matches: Match[] ) => this.matches = matches )
  }


  visitTeamPage(team: Team) {
    this.router.navigate(["adminDashboard", "teams", team._id ])
  }

}
 