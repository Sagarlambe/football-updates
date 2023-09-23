import { Component, OnInit } from '@angular/core';
import { leaguesMenu } from '../model/football.model';
import { FootBallService } from '../shared/api-football.service';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  leagueList: leaguesMenu[] = [];
  selectedMenuItemId: number = 39;
  constructor(private navigationService: NavigationService, private footballService: FootBallService) {
    this.getCountriesList();
  }
  ngOnInit() {}

  getCountriesList() {
    this.leagueList = this.footballService.getCountryList();
  }

  setActiveMenuItem(menuItemId: number) {
    this.navigationService.setSelectedMenuItemId(menuItemId);
    this.setIdleague(menuItemId);
    this.selectedMenuItemId = menuItemId;
  }

  setIdleague(menuItemId: number) {
    this.footballService.setIdleagueChanged(menuItemId);
  }
}


