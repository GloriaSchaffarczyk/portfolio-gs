import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    { imgSrc: 'assets/skills-icon-angular.png', name: 'Angular' },
    { imgSrc: 'assets/skills-icon-typescript.png', name: 'TypeScript' },
    { imgSrc: 'assets/skills-icon-api.png', name: 'Rest-API' },
    { imgSrc: 'assets/skills-icon-firebase.png', name: 'Firebase' },
    { imgSrc: 'assets/skills-icon-git.png', name: 'Git' },
    { imgSrc: 'assets/skills-icon-javascript.png', name: 'JavaScript' },
    { imgSrc: 'assets/skills-icon-css.png', name: 'CSS' },
    { imgSrc: 'assets/skills-icon-scrum.png', name: 'Scrum' },
    { imgSrc: 'assets/skills-icon-material-design.png', name: 'Material Design' },
    { imgSrc: 'assets/skills-icon-html.png', name: 'HTML' },
    { imgSrc: 'assets/skills-icon-wordpress.png', name: 'WordPress' },
    { imgSrc: 'assets/skills-icon-continually-learning-red.png', name: '' }
  ];

  ngAfterViewInit() {
    // Nur fortfahren, wenn 'window' definiert ist
    if (typeof window !== 'undefined') {
      this.toggleDNoneClass();
      window.addEventListener('resize', () => this.toggleDNoneClass());
    }
  }

  private toggleDNoneClass() {
    const isSmallScreen = window.innerWidth <= 1200;
    const elements = document.querySelectorAll('.d-none');

    elements.forEach(element => {
      if (isSmallScreen) {
        element.classList.remove('d-none');
      } else {
        element.classList.add('d-none');
      }
    });
  }
}
