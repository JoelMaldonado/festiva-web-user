import { ResolveFn, Router } from '@angular/router';
import { Event } from '../core/models/event.model';
import { inject } from '@angular/core';
import { EventService } from '../services/event.service';
import { catchError, EMPTY } from 'rxjs';
import { ApiResponse } from '../core/models/api-response.model';

export const eventResolver: ResolveFn<ApiResponse<Event>> = (route) => {
  const eventService = inject(EventService);
  const router = inject(Router);
  const eventId = route.paramMap.get('eventId')!;

  return eventService.getEventById(eventId).pipe(
    catchError(() => {
      router.navigate(['/events']);
      return EMPTY;
    }),
  );
};
