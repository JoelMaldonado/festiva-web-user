import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'events',
    renderMode: RenderMode.Server,
  },
  {
    path: 'events/:eventId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'events/:eventId/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'clubs',
    renderMode: RenderMode.Server,
  },
  {
    path: 'clubs/:clubId',
    renderMode: RenderMode.Server,
  },
  // Static pages: prerendered at build time
  {
    path: 'policies',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'delete-account',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'events-list',
    renderMode: RenderMode.Prerender,
  },
  // Unknown routes rendered on the server to avoid prerendering soft 404s
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
