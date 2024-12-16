import { Component, EventEmitter, Output, HostListener, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<boolean>();
  isMenuOpen = false;
  isChecked: boolean = false;

  constructor(public translationService: TranslationService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggle.emit(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;

    if (windowWidth > 1200 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnInit(): void {
    this.syncToggleWithLanguage();
  }

  toggleLanguage(): void {
    const newLanguage = this.translationService.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.setLanguage(newLanguage);
    this.syncToggleWithLanguage();
  }

  private syncToggleWithLanguage(): void {
    this.isChecked = this.translationService.currentLanguage === 'de';
  }
  
}