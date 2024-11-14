import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
    { imgSrc: 'assets/skills-icon-continually-learning-red.png', name: 'Continually learning', isHighlight: true }
  ];
  
  showTooltip = false;
  
  onHover(skill: any, index: number) {
    if (index === 11) {
      skill.imgSrc = 'assets/skills-icon-continually-learning-white.png';
      this.showTooltip = true;
    }
  }

  onLeave(skill: any, index: number) {
    if (index === 11) {
      skill.imgSrc = 'assets/skills-icon-continually-learning-red.png';
      this.showTooltip = false;
    }
  }
}
