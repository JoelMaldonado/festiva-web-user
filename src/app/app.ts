import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/ui/footer.component";
import { HeaderComponent } from "./shared/ui/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <div class="bg-neutral-800">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `,
})
export class App {}
