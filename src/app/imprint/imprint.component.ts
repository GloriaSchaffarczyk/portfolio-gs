import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements AfterViewInit {
  constructor(
    public translationService: TranslationService, 
    private el: ElementRef, 
    private renderer: Renderer2 
  ) {}

  ngAfterViewInit(): void {
    // Alle Links innerhalb der Komponente finden
    const links: NodeListOf<HTMLAnchorElement> = this.el.nativeElement.querySelectorAll('a');
  
    // Sicherstellen, dass die Links durchlaufen werden können
    Array.from(links).forEach((link) => {
      const href = link.getAttribute('href');
  
      // Nur externe Links bearbeiten, die keine internen Navigationen (routerLink) sind
      if (href && !href.startsWith('/') && !link.hasAttribute('routerLink')) {
        this.renderer.setAttribute(link, 'target', '_blank');
        this.renderer.setAttribute(link, 'rel', 'noopener noreferrer');
      }
    });
  }  
}
