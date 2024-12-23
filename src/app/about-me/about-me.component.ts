import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  constructor(
    private navigationService: NavigationService, 
    public translationService: TranslationService
  ) {}

  navigateToSection(id: string): void {
    this.navigationService.navigateToSection(id);
  }

  switchLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }
}
