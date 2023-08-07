import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  // imports: [SharedModule], //necessari per afegir el mòdul que conté la directiva que subratlla (quan no era standalone)
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
