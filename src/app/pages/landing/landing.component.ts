import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingCardComponent } from 'src/app/components/landing-card/landing-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LandingCardComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
