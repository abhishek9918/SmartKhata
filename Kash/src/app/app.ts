import { Component, signal } from '@angular/core';
import { SmartKhata } from './components/smart-khata/smart-khata';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SmartKhata],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Kash');
}
