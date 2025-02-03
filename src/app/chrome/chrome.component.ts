import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'chrome',
  standalone: true,
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss'],  // Use styleUrls instead of styleUrl
  imports: [ MaterialModule, RouterModule ]
})
export class ChromeComponent {}

