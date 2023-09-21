import { Component, OnInit } from '@angular/core';
import { FootBallService } from '../shared/api-football.service';
import { StandingObject, Standing } from '../model/football.model';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})

export class LeagueTableComponent implements OnInit {
tableData:Standing[]=[]; 
  constructor(private footballService: FootBallService) {}
  ngOnInit() {
    this.getFootballData();
    this.tableData = JSON.parse(localStorage.getItem('footballStandingsData') || '[]');
  }
  getFootballData() {
    this.footballService.getFootballData().subscribe((data:StandingObject) => {
      this.tableData = data.response[0]?.league?.standings[0];
      localStorage.setItem('footballStandingsData', JSON.stringify(this.tableData));
    });
  }
  onSelectTeamName(teamId:number){
    this.footballService.setIdTeamsChanged(teamId);
  }
  }
  
