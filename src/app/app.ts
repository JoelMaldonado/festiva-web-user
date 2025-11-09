import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
