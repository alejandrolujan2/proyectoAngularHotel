import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    SearchBarComponent,
    HotelListComponent,
    FooterComponent
  ],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a> |
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a> <!-- link nuevo -->
    </nav>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: [`
    nav {
      padding: 10px;
      background: #eee;
    }
    nav a {
      margin-right: 10px;
      text-decoration: none;
      color: #333;
    }
    nav a.active {
      font-weight: bold;
      color: #007bff;
    }
  `]
})
export class AppComponent {}
