import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isOpen = false;
  routeName = '';
  activeTab: 'profile' | 'archive' = 'profile';
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    // Listen for route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.routeName = this.getRouteName(this.route);
      });
  }
  // Get the last child route data.name
  getRouteName(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['name'] || '';
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}