import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [],
  template: `
    <footer id="footer" class="bg-b1 py-16 md:py-0 md:h-[300px] flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row items-start w-[90%] max-w-7xl gap-y-12 gap-x-8 text-white"
      >
        <!-- Logo e introducción -->
        <div class="md:w-1/3">
          <img src="images/logo1.png" alt="" class="w-[150px]" />
          <span class="block mt-4 text-[16px] font-bold"> A new way to own the night </span>
          <p class="text-[16px] mt-2">
            Events, clubs, and unforgettable experiences, all in one place.
          </p>
        </div>

        <!-- Información de contacto -->
        <div class="md:w-1/3">
          <span class="text-xl font-bold block mb-4">
            <span class="text-p1">Contact</span> Information
          </span>
          <div class="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-6 h-6 text-white"
              fill="currentColor"
            >
              <path
                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
              />
            </svg>
            <span>info@festiva.no</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-6 h-6 text-white"
              fill="currentColor"
            >
              <path
                d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
              />
            </svg>
            <span>Org. Number: 935 459 494</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-6 h-6 text-white"
              fill="currentColor"
            >
              <path
                d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
              />
            </svg>
            <span>Festiva AS</span>
          </div>
        </div>

        <!-- Botones de descarga -->
        <div class="md:w-1/3 md:ml-auto">
          <span class="text-xl font-bold block mb-4">
            <span class="text-p1">Download</span> Festiva
          </span>
          <a
            href="https://apps.apple.com/us/app/festiva/id6746812825"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icons/app_store.svg" alt="App Store" class="mb-2 h-[50px]" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.festiva.core&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icons/google_play.svg" alt="Google Play" class="h-[50px]" />
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
