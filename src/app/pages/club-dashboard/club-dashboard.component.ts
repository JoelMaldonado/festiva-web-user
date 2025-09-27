import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-club-dashboard-page',
  imports: [CommonModule],
  templateUrl: './club-dashboard.component.html',
})
export class ClubDashboardPage {
  year = new Date().getFullYear();
}
