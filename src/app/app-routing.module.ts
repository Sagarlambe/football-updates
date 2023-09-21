import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueTableComponent } from './league-table/league-table.component';
import { GameResultsComponent } from './game-results/game-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/englandSelect', pathMatch: 'full' },
  { path: 'englandSelect', component: LeagueTableComponent },
  { path: 'spainSelect', component: LeagueTableComponent },
  { path: 'germanySelect', component: LeagueTableComponent },
  { path: 'franceSelect', component: LeagueTableComponent },
  { path: 'italySelect', component: LeagueTableComponent },
  { path: 'game-results', component: GameResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
