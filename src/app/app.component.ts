import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appWindow } from '@tauri-apps/api/window';
import { APP_CONFIG } from '../environments/environment';
import { TauriService } from './core/services/tauri/tauri.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NgIf]
})
export default class AppComponent {
  isTauri = this.tauriService.isTauri;

  constructor(private tauriService: TauriService) {
    console.log('APP_CONFIG', APP_CONFIG);

    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
      this.tauriService.callHelloWorld();
    } else {
      console.log('Run in browser');
    }
  }

  minimize() {
    appWindow.minimize();
  }

  toggleMaximize() {
    appWindow.toggleMaximize();
  }

  close() {
    appWindow.close();
  }
}
