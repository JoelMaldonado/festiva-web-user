import { Routes } from '@angular/router';
import { EventDashboardPage } from './pages/event-dashboard/event-dashboard.component';
import { ClubDashboardPage } from './pages/club-dashboard/club-dashboard.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { ClubDetailComponent } from './pages/club-detail/club-detail.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';
import { EventListComponent } from './pages/event-list/event-list.component';

export const routes: Routes = [
  {
    path: 'policies',
    component: PoliciesComponent,
  },
  {
    path: 'delete-account',
    component: DeleteAccountComponent,
  },
  {
    path: 'events',
    component: EventDashboardPage,
  },
  {
    path: 'events-list',
    component: EventListComponent,
  },
  {
    path: 'events/:eventId',
    component: EventDetailComponent,
  },
  {
    path: 'events/:id/:slug',
    component: EventDetailComponent,
  },
  {
    path: 'clubs',
    component: ClubDashboardPage,
  },
  {
    path: 'clubs/:clubId',
    component: ClubDetailComponent,
  },
];
