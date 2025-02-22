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
  ) { }

  ngAfterViewInit(): void {
    const links: NodeListOf<HTMLAnchorElement> = this.el.nativeElement.querySelectorAll('a');

    Array.from(links).forEach((link) => {
      const href = link.getAttribute('href');

      if (href && !href.startsWith('/') && !link.hasAttribute('routerLink')) {
        this.renderer.setAttribute(link, 'target', '_blank');
        this.renderer.setAttribute(link, 'rel', 'noopener noreferrer');
      }
    });
  }
}
