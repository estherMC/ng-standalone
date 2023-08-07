import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule], //necessari per afegir el mòdul que conté la directiva que subratlla
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
