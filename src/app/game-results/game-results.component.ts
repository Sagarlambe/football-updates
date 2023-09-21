import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { FootBallService } from '../shared/api-football.service';
import { FixtureObject, fixtureResponse } from '../model/football.model';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent {
  resultData: fixtureResponse[] = [];
  constructor(private footballService: FootBallService,
    private location: Location) { }

  ngOnInit() {
    this.getGameRecords();
    this.resultData = JSON.parse(localStorage.getItem('gameRecordsData') || '[]');
  }

  getGameRecords() {
    this.footballService.getGamesResult().subscribe((data:FixtureObject) => {
      this.resultData = data.response;
      localStorage.setItem('gameRecordsData', JSON.stringify(this.resultData));
    })
  }

  goBack() {
    this.location.back()
  }
}
