import { mergeApplicationConfig, ApplicationConfig, InjectionToken } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { environment as serverEnvironment } from '../environments/environment.server';

export const SERVER_API_URL = new InjectionToken<string>('SERVER_API_URL');

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: SERVER_API_URL,
      useValue: serverEnvironment.apiUrl,
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
