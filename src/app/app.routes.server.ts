import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'events/:eventId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'events/:eventId/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'clubs/:clubId',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
