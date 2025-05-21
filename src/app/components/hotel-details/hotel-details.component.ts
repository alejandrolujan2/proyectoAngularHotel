import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  services = [
    { label: 'Free WiFi', selected: true },
    { label: 'Free parking', selected: true },
    { label: 'Airport shuttle', selected: true },
    { label: 'Swimming pool', selected: true },
    { label: 'Spa and wellness center', selected: true },
    { label: 'Bar', selected: true }
  ];
}
