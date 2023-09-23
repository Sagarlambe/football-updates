import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { leagueList } from '../mock-leagues';
import { FixtureObject, StandingObject,  leaguesMenu } from '../model/football.model';
@Injectable({ providedIn: 'root' })
export class FootBallService {
  private apiKey = '6440392d5e93461c956f2cebb78a0767'; 
  private apiUrl = 'https://v3.football.api-sports.io/';
  lastgames: number = 10;
  private idTeams: number = 40;
  currentYear: Date | number;
  private idleague: number;
  public idlTeamChanged$: EventEmitter<number>;
  public idleagueChanged$: EventEmitter<number>;
  
  constructor(private http: HttpClient) {
    this.currentYear = (new Date()).getFullYear();
    this.idleague = 39;
    this.idTeams = 40;
    this.lastgames = 10;
    this.idleagueChanged$ = new EventEmitter();
    this.idlTeamChanged$ = new EventEmitter();
  }

 getCountryList(): leaguesMenu[] {
    return leagueList;
  }

  getFootballData(): Observable<StandingObject> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey
    });
    return this.http.get<StandingObject>(`${this.apiUrl}standings?league=${this.idleague}&season=${this.currentYear}`, { headers });
  }

    getGamesResult(): Observable<FixtureObject> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey
    });
    return this.http.get<FixtureObject>(`${this.apiUrl}fixtures?league=${this.idleague}&season=${this.currentYear}&team=${this.idTeams}&last=${this.lastgames}`, { headers });
  }

    setIdleagueChanged(idleague: number) {
    this.idleague = idleague;
    this.idleagueChanged$.emit(idleague);
  }

  setIdTeamsChanged(teamId: number) {
    this.idTeams = teamId;
    this.idlTeamChanged$.emit(teamId)
  }

}
