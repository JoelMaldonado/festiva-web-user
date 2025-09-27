import { Routes } from '@angular/router';
import { EventDashboardPage } from './pages/event-dashboard/event-dashboard.component';
import { ClubDashboardPage } from './pages/club-dashboard/club-dashboard.component';

export const routes: Routes = [
  {
    path: 'events',
    component: EventDashboardPage,
  },
  {
    path: 'clubs',
    component: ClubDashboardPage,
  },
];
