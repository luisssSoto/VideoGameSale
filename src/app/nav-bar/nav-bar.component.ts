import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,
  RouterModule],
  template: `
<div class="navbar">

    <a [routerLink]="['/']">Most Popular</a>
    <a [routerLink]="['/most-downloaded']">Most Downloaded</a>
    <a [routerLink]="['/coming-soon']">Coming Soon</a>
    <a [routerLink]="['/add-new-one']">Add New One</a>
    <a [routerLink]="['/login']">Back</a>
</div>
  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
