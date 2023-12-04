import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule,
RouterLink],
  template: `
    <<section class="listing-apply">
      <h2 class="section-heading">Login</h2>
      <form [formGroup]="applyForm" (submit)="submitSignIn()">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <label for="password">Pasword</label>
        <input id="password" type="password" formControlName="password">
        <a [routerLink]="['/']"><button type="submit" class="primary">Sign in</button></a>
        <a [routerLink]="['../register']"><button type="submit" class="primary">Register</button></a>
      </form>
    </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  submitSignIn() {
    this.housingService.submitSignIn(
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
    );
  }
}
