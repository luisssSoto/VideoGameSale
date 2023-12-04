import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule,
RouterLink],
  template: `
    <<section class="listing-apply">
      <h2 class="section-heading">Add new videogame to your library</h2>
      <form [formGroup]="applyForm" (submit)="submitRegister()">
        <label for="first-name">Name</label>
        <input id="first-name" type="string" formControlName="first Name">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <label for="password">Pasword</label>
        <input id="password" type="password" formControlName="password">
        <label for="confirm-password">Confirm Pasword</label>
        <input id="confirm-password" type="password" formControlName="confirm Password">
        <a [routerLink]="['../login']"><button type="submit" class="primary">Apply</button></a>
        <a [routerLink]="['/login']"><button type="submit" class="primary">Login</button></a>
      </form>
    </section>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPasword: new FormControl('')
  });

  submitRegister() {
    this.housingService.submitRegister(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
      this.applyForm.value.confirmPasword ?? ''
    );
  }

}
