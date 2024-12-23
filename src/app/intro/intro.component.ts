import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  constructor(
    private navigationService: NavigationService, 
    public translationService: TranslationService
  ) {}

  navigateToSection(id: string): void {
    this.navigationService.navigateToSection(id);
  }
}

