import { NgModule } from "@angular/core";
import { FixturesComponent } from './fixtures/fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { MatchEventComponent } from './match-event/match-event.component';
import { MatchReportComponent } from './match-report/match-report.component';




@NgModule({
    declarations: [
        FixturesComponent,
        LeagueTableComponent,
        LiveFeedComponent,
        MatchEventComponent,
        MatchReportComponent
    ]
})



export class CompetitionsModule { }