import { OpaqueToken } from '@angular/core';

export let appSettings = new OpaqueToken('app.config');

export class AppConfig {
  apiEndpoint: string;
  apiKey: string;
};

export const appConfig: AppConfig = {
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<Your public key here>'
};
