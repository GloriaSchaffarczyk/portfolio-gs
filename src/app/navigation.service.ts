import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  navigateToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -200;
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}
