import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_CONFIG } from '../environments/environment';
import { TauriService } from './core/services/tauri/tauri.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet]
})
export default class AppComponent {
  constructor(private tauriService: TauriService) {
    console.log('APP_CONFIG', APP_CONFIG);

    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
      this.tauriService.callHelloWorld();
    } else {
      console.log('Run in browser');
    }
  }
}
