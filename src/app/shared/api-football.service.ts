import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { leagueList } from '../mock-leagues';
import { FixtureObject, StandingObject,  leaguesMenu } from '../model/football.model';
@Injectable({ providedIn: 'root' })
export class FootBallService {
  lastgames: number = 10;
  private idTeams: number = 40;
  currentYear: Date | number;
  private idleague: number;
  public idlTeamChanged$: EventEmitter<number>;
  public idleagueChanged$: EventEmitter<number>;
  headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '6440392d5e93461c956f2cebb78a0767'
  });

  constructor(private http: HttpClient) {
    this.currentYear = (new Date()).getFullYear();
    this.idleague = 39;
    this.idTeams = 40;
    this.lastgames = 10;
    this.idleagueChanged$ = new EventEmitter();
    this.idlTeamChanged$ = new EventEmitter();
  }

  setIdleagueChanged(idleague: number) {
    this.idleague = idleague;
    this.idleagueChanged$.emit(idleague);
  }

  setIdTeamsChanged(teamId: number) {
    this.idTeams = teamId;
    this.idlTeamChanged$.emit(teamId)
  }

  getFootballData(): Observable<StandingObject> {
    return this.http.get<StandingObject>(`https://v3.football.api-sports.io/standings?league=${this.idleague}&season=${this.currentYear}`, { headers: this.headers });
  }

  getCountryList(): leaguesMenu[] {
    return leagueList;
  }

  getGamesResult(): Observable<FixtureObject> {
    return this.http.get<FixtureObject>(`https://v3.football.api-sports.io/fixtures?league=${this.idleague}&season=${this.currentYear}&team=${this.idTeams}&last=${this.lastgames}`, { headers: this.headers });
  }

}
