import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation} from '../housing-location';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="housingLocation.image" alt="Exterior photo of {{housingLocation.title}}">
    <h2 class="listing-heading">{{ housingLocation.title }}</h2>
    <p class="listing-location">{{ housingLocation.description}}, {{housingLocation.releaseDate }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}