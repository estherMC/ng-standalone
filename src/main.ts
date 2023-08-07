import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

//The next function add by default the BrowserModule
bootstrapApplication(AppComponent);
// platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));
