import { Component, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-gs';

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const scrollElement = this.renderer.selectRootElement('html', true);
        this.renderer.setProperty(scrollElement, 'scrollTop', 0);
      }
    });
  }

  onMenuToggle(isMenuOpen: boolean): void {
    if (isMenuOpen) {
      this.renderer.addClass(document.body, 'scrollStop');
    } else {
      this.renderer.removeClass(document.body, 'scrollStop');
    }
  }
}
