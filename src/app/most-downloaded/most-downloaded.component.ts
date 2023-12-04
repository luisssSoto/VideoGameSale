import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation} from '../housing-location';
import { HousingService } from '../housing.service';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-most-downloaded',
  standalone: true,
  imports: [CommonModule,
  HousingLocationComponent,
NavBarComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by title of the game" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    <br>
    <app-nav-bar></app-nav-bar>
    <br>
  </section>
  
  <app-housing-location
  *ngFor="let housingLocation of filteredLocationList"
  [housingLocation]="housingLocation">
</app-housing-location>
  `,
  styleUrl: './most-downloaded.component.css'
})
export class MostDownloadedComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = []; 

constructor() {
  this.housingLocationList = this.housingService.getMostDownloaded();
  this.filteredLocationList = this.housingLocationList;
}
}
