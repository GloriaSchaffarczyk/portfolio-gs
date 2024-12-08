import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  mobileLinks = [
    { text: 'About me', href: '#about-me' },
    { text: 'Skills', href: '#skills' },
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'Contact', href: '#contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
