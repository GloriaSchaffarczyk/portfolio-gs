import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-gs';

  constructor(private renderer: Renderer2) { }

  onMenuToggle(isMenuOpen: boolean): void {
    if (isMenuOpen) {
      this.renderer.addClass(document.body, 'scrollStop');
    } else {
      this.renderer.removeClass(document.body, 'scrollStop');
    }
  }
}
