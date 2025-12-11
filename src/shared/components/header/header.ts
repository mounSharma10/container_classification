import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isOpen = false;
  routeName = '';
  activeTab: 'profile' | 'archive' = 'profile';
  router = inject(Router);
  route = inject(ActivatedRoute);
  items = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"];
  selectedItem: string = "";
  isDropdownOpen = false;
  

  constructor() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.routeName = this.getRouteName(this.route);
      });
  //   this.router.events
  // .pipe(filter(event => event instanceof NavigationEnd))
  // .subscribe(() => {
  //   this.routeName = this.router.url.split('/').pop() || '';
  // });

  }

  getRouteName(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['name'] || '';
  }

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

selectItem(item: string) {
  this.selectedItem = item;
  this.isDropdownOpen = false;
}

}