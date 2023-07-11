import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss'],
})
export class LandingCardComponent {
  @Input()
  title!: string;
  @Input() backgroundImage!: string;
}
