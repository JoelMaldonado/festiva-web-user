import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-event-dashboard-page',
  imports: [CommonModule],
  templateUrl: './event-dashboard.component.html',
})
export class EventDashboardPage {
  date = new Date().getFullYear();
}
