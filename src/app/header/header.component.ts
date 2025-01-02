import { Component, EventEmitter, Output, HostListener, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<boolean>();
  isMenuOpen = false;
  isChecked: boolean = false;

  constructor(
    public translationService: TranslationService,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggle.emit(false);
  }

  navigateToSection(sectionId: string): void {
    if (this.router.url === '/') {
      setTimeout(() => this.navigationService.navigateToSection(sectionId), 200);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.navigationService.navigateToSection(sectionId), 200);
      });
    }
  }

  navigateToSectionAndCloseMenu(sectionId: string): void {
    this.closeMenu();
    this.navigateToSection(sectionId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth > 1200 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.translationService.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.setLanguage(newLanguage);
    this.syncToggleWithLanguage();
  }

  private syncToggleWithLanguage(): void {
    this.isChecked = this.translationService.currentLanguage === 'de';
  }

  ngOnInit(): void {
    this.syncToggleWithLanguage();
  }
}
