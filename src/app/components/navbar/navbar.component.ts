import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ← IMPORTANTE

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ← AÑADELO AQUÍ
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
