import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChromeComponent } from './chrome/chrome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChromeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Use styleUrls instead of styleUrl
})
export class AppComponent {
  title = 'CDM Portfolio';
}
