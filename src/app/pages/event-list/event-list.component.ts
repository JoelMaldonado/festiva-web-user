import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from "./components/categories.component";

type EventItem = {
  id: number | string;
  title: string;
  description?: string;
  imageUrl?: string;
  category: string;
  clubId: number | string;
  clubName: string;
  venue: string;
  // fechas separadas: para la tarjeta mostramos la "próxima"
  schedules: Array<{ date: string; time: string }>; // 'YYYY-MM-DD', 'HH:mm'
};

@Component({
  standalone: true,
  selector: 'app-event-list',
  imports: [CommonModule, FormsModule, CategoriesComponent],
  templateUrl: './event-list.component.html',
})
export class EventListComponent {
  // ---- State UI (maqueta) ----
  isLoading = false;

  // Filtros
  q = '';
  dateFrom = '';
  dateTo = '';
  club: string | number | '' = '';
  categories: string[] = [
    'Party',
    'Latin',
    'Afrobeat',
    'Techno / House',
    'Student',
    'Themed',
    'LGBTQ+ / Drag',
    'Indie / Rock',
    'Hip-Hop / R&B',
    'Live Music',
    'Jazz & Blues',
    'Disco / Funk',
    'Folk / Americana',
    'Games & Quiz',
  ];
  selectedCategories = new Set<string>();

  // Clubs demo
  clubs = [
    { id: 1, name: 'Casablanca' },
    { id: 2, name: 'Skatten Oslo' },
    { id: 3, name: 'Harlem' },
  ];

  // Data demo
  events: EventItem[] = [
    {
      id: 101,
      title: 'Latin Night x DJ Nova',
      category: 'Latin',
      clubId: 1,
      clubName: 'Casablanca',
      venue: 'Casablanca — Oslo',
      imageUrl: '/assets/demo/latin.jpg',
      schedules: [{ date: '2025-12-12', time: '22:00' }],
    },
    {
      id: 102,
      title: 'Techno / House: Paramida & Friends',
      category: 'Techno / House',
      clubId: 2,
      clubName: 'Skatten Oslo',
      venue: 'Skatten — Oslo',
      imageUrl: '/assets/demo/techno.jpg',
      schedules: [
        { date: '2025-11-27', time: '23:00' },
        { date: '2025-11-28', time: '23:00' },
      ],
    },
    {
      id: 103,
      title: 'Hip-Hop / R&B Vibes',
      category: 'Hip-Hop / R&B',
      clubId: 3,
      clubName: 'Harlem',
      venue: 'Harlem — Oslo',
      imageUrl: '/assets/demo/hiphop.jpg',
      schedules: [{ date: '2025-11-20', time: '21:00' }],
    },
  ];

  // Paginación
  rows = 12;
  page = 0;

  // ---- Actions filtros ----
  applyFilters() {
    this.page = 0;
  }

  // ---- Helpers & getters ----
  private toTime(d: string, t: string): number {
    const [y, m, day] = d.split('-').map(Number);
    const [hh, mm] = (t || '0:0').split(':').map(Number);
    return new Date(y, m - 1, day, hh || 0, mm || 0).getTime();
  }
  nextDate(ev: EventItem): Date {
    if (!ev.schedules?.length) return new Date();
    const ts = ev.schedules.map((s) => this.toTime(s.date, s.time)).sort((a, b) => a - b)[0];
    return new Date(ts);
  }

  get filtered(): EventItem[] {
    const q = this.q.trim().toLowerCase();
    const df = this.dateFrom ? new Date(this.dateFrom).getTime() : -Infinity;
    const dt = this.dateTo ? new Date(this.dateTo).getTime() + 24 * 3600 * 1000 - 1 : Infinity;
    return this.events.filter((ev) => {
      // texto
      const hayQ =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.clubName.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q);
      if (!hayQ) return false;
      // club
      if (this.club && String(ev.clubId) !== String(this.club)) return false;
      // categorías
      if (this.selectedCategories.size && !this.selectedCategories.has(ev.category)) return false;
      // rango fechas: si alguna fecha cae en el rango, vale
      if (this.dateFrom || this.dateTo) {
        const anyInRange = ev.schedules.some((s) => {
          const ts = this.toTime(s.date, s.time);
          return ts >= df && ts <= dt;
        });
        if (!anyInRange) return false;
      }
      return true;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filtered.length / this.rows));
  }
  get startIndex(): number {
    return this.page * this.rows;
  }
  get endIndex(): number {
    return Math.min(this.startIndex + this.rows, this.filtered.length);
  }
  get paged(): EventItem[] {
    return this.filtered.slice(this.startIndex, this.endIndex);
  }
  prevPage() {
    if (this.page > 0) this.page--;
  }
  nextPage() {
    if (this.page + 1 < this.totalPages) this.page++;
  }
}
