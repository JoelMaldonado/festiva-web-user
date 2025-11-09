import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header.component';
import { FooterComponent } from './shared/ui/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="bg-neutral-800">
      <!--
      <app-header />
      <app-footer />
    -->
      <router-outlet />
    </div>
  `,
})
export class App {}
