import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl  } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';

import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-add-new-one',
  standalone: true,
  imports: [CommonModule,
ReactiveFormsModule,
NavBarComponent],
  template: `
  <br>
    <app-nav-bar></app-nav-bar>
    <br>
    <section class="listing-apply">
      <h2 class="section-heading">Add new videogame to your library</h2>
      <form [formGroup]="applyForm" (submit)="addingNewOne()">
        <label for="title">Title</label>
        <input id="title" type="text" formControlName="title">

        <label for="description">Description</label>
        <input id="description" type="text" formControlName="description">

        <label for="release-date">Release Date</label>
        <input id="release-date" type="date" formControlName="releaseDate">
        
        <label for="image">URL Image</label>
        <input id="image" type="text" formControlName="image">
        
        <label for="rating">Rating</label>
        <input id="rating" type="number" formControlName="rating">
        
        <label for="downloads">Downloads</label>
        <input id="downloads" type="number" formControlName="releaseDate">
        
        <label for="coming-soon">Coming Soon</label>
        <input id="coming-soon" type="checkbox" formControlName="comingSoon">
        
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  `,
  styleUrl: './add-new-one.component.css'
})
export class AddNewOneComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //     return;
  //   }
  
  //   this.filteredLocationList = this.housingLocationList.filter(
  //     housingLocation => housingLocation?.title.toLowerCase().includes(text.toLowerCase())
  //   );
  // }

    applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    releaseDate: new FormControl(''),
    image: new FormControl(''),
    rating: new UntypedFormControl(''),
    downloads: new UntypedFormControl(''),
    comingSoon: new UntypedFormControl('')

  });

  // housingLocationList: HousingLocation[] = [];
  // filteredLocationList: HousingLocation[] = []; 

  constructor() {
    // const housingLocationId = Number(this.route.snapshot.params['id']);
    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    // this.filteredLocationList = this.housingLocationList;
  }

  addingNewOne() {
    this.housingService.addingNewOne(
      this.applyForm.value.title ?? '',
      this.applyForm.value.description ?? '',
      this.applyForm.value.releaseDate ?? '',
      this.applyForm.value.image ?? '',
      this.applyForm.value.rating ?? '',
      this.applyForm.value.downloads ?? '',
      this.applyForm.value.comingSoon ?? ''
    );
  }
}
