import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Router, ActivatedRoute } from '@angular/router';

class TableRow {
  teamName: string;
  teamId: string;
  wins: number;
  conceded: number;
  draws: number;
  games: number;
  goalDiference: number;
  loses: number;
  points: number;
  scored: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  actRoute: ActivatedRoute;
  router: Router;
  teamsService: TeamService;
  table: TableRow[];


  constructor(teamsSrv: TeamService, router: Router, actRoute: ActivatedRoute) {
    this.teamsService = teamsSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    this.teamsService.getLeagueTable().then( (leagueTable: any) => {
      const tableJSON = leagueTable.table;
      this.table = [];
      for (let i = 0; i < tableJSON.length; i++) {
        let row = new TableRow();
        row.teamName = tableJSON[i].team.name;
        row.teamId = tableJSON[i].team._id;
        row.wins = Number(tableJSON[i].wins);
        row.conceded = Number(tableJSON[i].conceded);
        row.draws = Number(tableJSON[i].draws);
        row.goalDiference = Number(tableJSON[i].goalDiference);
        row.games = Number(tableJSON[i].games);
        row.loses = Number(tableJSON[i].loses);
        row.points = Number(tableJSON[i].points);
        row.scored = Number(tableJSON[i].scored);
        this.table[i] = row
      }
    })
  }

  
  visitTeamPage(id: string){
    this.router.navigate([ "../", "team" ], { queryParams: { id }, relativeTo: this.actRoute })
  }

}
