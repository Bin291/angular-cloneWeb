import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content3',
  templateUrl: './navbar-content3.component.html',
  styleUrls: ['./navbar-content3.component.scss'],
})
export class NavbarContent3Component {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
