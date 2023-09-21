import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeRouteSubject = new BehaviorSubject<string>('');
  activeRoute$ = this.activeRouteSubject.asObservable();

  private selectedMenuItemIdSubject = new BehaviorSubject<number>(1);
  selectedMenuItemId$ = this.selectedMenuItemIdSubject.asObservable();

  setSelectedMenuItemId(menuItemId: number) {
    this.selectedMenuItemIdSubject.next(menuItemId);
  }
}