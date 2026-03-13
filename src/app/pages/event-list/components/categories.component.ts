import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../core/models/category.model';

@Component({
  standalone: true,
  selector: 'app-categories',
  template: `
    <div class="mt-3 flex flex-wrap gap-2">
      @for (cat of categories; track cat) {
      <button
        type="button"
        class="px-3 py-1.5 rounded-full border text-xs font-medium transition
                     select-none whitespace-nowrap"
        [class]="
          verifyIfExist(cat)
            ? 'border-pink-500 text-white bg-pink-600/20'
            : 'border-white/15 text-slate-300 hover:bg-white/10'
        "
        (click)="toggleCategory(cat)"
      >
        {{ cat }}
      </button>
      }
      <button
        type="button"
        class="px-3 py-1.5 rounded-full border text-xs font-semibold text-slate-200 hover:bg-white/10 border-white/10"
        (click)="clearFilters()"
      >
        Limpiar filtros
      </button>
    </div>
  `,
})
export class CategoriesComponent implements OnInit {
  private readonly categoryService = inject(CategoryService);

  categories: Category[] = [];
  selectedCategories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        if (res.success) {
          this.categories = res.data ?? [];
        }
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      },
      complete: () => {
        console.log('Finished fetching categories');
      },
    });
  }

  verifyIfExist(category: Category): boolean {
    return this.selectedCategories.includes(category);
  }

  toggleCategory(cat: Category) {
    //if (this.selectedCategories.has(cat)) this.selectedCategories.delete(cat);
    //else this.selectedCategories.add(cat);
    //this.page = 0;
  }

  clearFilters() {
    //his.q = '';
    //his.dateFrom = '';
    //his.dateTo = '';
    //his.club = '';
    //his.selectedCategories.clear();
    //his.page = 0;
  }
}
