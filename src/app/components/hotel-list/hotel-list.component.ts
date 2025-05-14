import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule], // 👈 Importa CommonModule aquí
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotels = [
    {
      name: 'The Standard – East Village',
      image: 'https://source.unsplash.com/random/300x200?hotel1',
      rating: 4.5,
      reviews: 1234,
      price: '$200'
    },
    {
      name: 'The Bowery Hotel',
      image: 'https://source.unsplash.com/random/300x200?hotel2',
      rating: 4.7,
      reviews: 2345,
      price: '$250'
    },
    {
      name: 'The Ludlow Hotel',
      image: 'https://source.unsplash.com/random/300x200?hotel3',
      rating: 4.3,
      reviews: 3456,
      price: '$175'
    },
    {
      name: 'The NoMad Hotel',
      image: 'https://source.unsplash.com/random/300x200?hotel4',
      rating: 4.6,
      reviews: 4567,
      price: '$225'
    },
    {
      name: 'Public',
      image: 'https://source.unsplash.com/random/300x200?hotel5',
      rating: 4.8,
      reviews: 5678,
      price: '$300'
    }
  ];
}
