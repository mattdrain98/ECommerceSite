import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', 
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cart-page',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'search/:searchTerm', 
    renderMode: RenderMode.Client
  },
  {
    path: 'tag/:tag', 
    renderMode: RenderMode.Client
  },
  {
    path: 'game/:id', 
    renderMode: RenderMode.Client
  }
];
