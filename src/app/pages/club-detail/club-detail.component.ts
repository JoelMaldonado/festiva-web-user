import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-club-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './club-detail.component.html',
})
export class ClubDetailComponent {
  club?: {
    id: number;
    name: string;
    description?: string;
    image_url?: string;
    logo_url?: string;
    address?: string;
    district?: string;
    city?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    capacity?: number;
    opening_hours?: string;
    followers_count?: number;
    is_open_now?: boolean;
  } = {
    id: 1,
    name: 'SALT — Art & Music',
    description:
      'Un espacio icónico en el corazón de Aker Brygge donde el arte se encuentra con la música. SALT es mucho más que un club: es un lugar de encuentro para artistas, músicos y amantes de la cultura. Con vistas espectaculares al fiordo de Oslo, ofrecemos una experiencia única con eventos de música en vivo, DJ sets y exposiciones de arte contemporáneo.\n\nNuestro espacio cuenta con una acústica excepcional y una atmósfera única que combina el encanto industrial con un diseño moderno y elegante. Cada noche es diferente en SALT.',
    image_url:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
    logo_url:
      'https://images.unsplash.com/photo-1609921141837-3c4df0b3c2e1?q=80&w=240&auto=format&fit=crop',
    address: 'Langkaia 1, 0150 Oslo',
    district: 'Aker Brygge',
    city: 'Oslo',
    website: 'https://saltoslo.no',
    instagram: 'https://instagram.com/saltoslo',
    facebook: 'https://facebook.com/saltoslo',
    capacity: 500,
    opening_hours: 'Jueves - Domingo: 22:00 - 03:00',
    followers_count: 12350,
    is_open_now: true,
  };

  upcomingEvents: {
    id: number;
    title: string;
    date: Date | string;
    time?: string;
    image_url?: string;
    artist?: string;
    ticket_url?: string;
  }[] = [
    {
      id: 1,
      title: 'Boogie Lights w/ Live Sax',
      date: new Date('2024-11-15'),
      time: '22:00',
      image_url:
        'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=800&auto=format&fit=crop',
      artist: 'DJ Fresh & The Sax Collective',
      ticket_url: 'https://example.com/tickets',
    },
    {
      id: 2,
      title: 'Techno Underground',
      date: new Date('2024-11-16'),
      time: '23:00',
      image_url:
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop',
      artist: 'Maya Jane Coles, Bicep',
      ticket_url: 'https://example.com/tickets',
    },
    {
      id: 3,
      title: 'Jazz Sessions',
      date: new Date('2024-11-20'),
      time: '21:00',
      image_url:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
      artist: 'Oslo Jazz Collective',
      ticket_url: 'https://example.com/tickets',
    },
  ];

  galleryImages: string[] = [
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
  ];

  genres: string[] = ['Techno', 'House', 'Jazz', 'Live Music', 'Art Exhibitions'];

  stats = {
    events_this_month: 12,
    average_rating: 4.8,
    total_reviews: 245,
  };

  hours: { day: string; hours: string; isOpen: boolean }[] = [
    { day: 'Lunes', hours: 'Cerrado', isOpen: false },
    { day: 'Martes', hours: 'Cerrado', isOpen: false },
    { day: 'Miércoles', hours: 'Cerrado', isOpen: false },
    { day: 'Jueves', hours: '22:00 - 03:00', isOpen: true },
    { day: 'Viernes', hours: '22:00 - 03:00', isOpen: true },
    { day: 'Sábado', hours: '22:00 - 04:00', isOpen: true },
    { day: 'Domingo', hours: '22:00 - 03:00', isOpen: true },
  ];

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get isOpenNow(): boolean {
    return this.club?.is_open_now ?? false;
  }

  get nextEvent(): typeof this.upcomingEvents[0] | null {
    return this.upcomingEvents[0] || null;
  }
}
