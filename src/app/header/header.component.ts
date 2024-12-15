import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<boolean>(); // Ereignis für das Menü-Status

  isMenuOpen = false;

  constructor(public translationService: TranslationService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen); // Menü-Status an die Elternkomponente senden
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggle.emit(false); // Menü wird geschlossen
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;

    if (windowWidth > 1200 && this.isMenuOpen) {
      this.closeMenu(); // Menü schließen und Elternkomponente informieren
    }
  }

  setLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translationService.setLanguage(lang);
  }
  
}
