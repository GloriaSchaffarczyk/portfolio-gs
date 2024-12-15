import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

// buttons stylen 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public translationService: TranslationService) {}

  projects = [
    {
      titleKey: 'PROJECT.JOIN.TITLE',
      descriptionKey: 'PROJECT.JOIN.DESCRIPTION',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      imageSrc: 'assets/Portfolio_Join_Laptop Mockup_01.gif',
      liveTestLink: 'http://join.gloriacodes.de/',
      githubLink: 'https://github.com/GloriaSchaffarczyk/Join',
      reverseLayout: false,
    },
    {
      titleKey: 'PROJECT.MONSTER.TITLE',
      descriptionKey: 'PROJECT.MONSTER.DESCRIPTION',
      technologies: ['JavaScript', 'OOP', 'HTML', 'CSS'],
      imageSrc: 'assets/Portfolio_MMM_Laptop Mockup_01.gif',
      liveTestLink: 'http://monstermunchingmadness.gloriacodes.de/',
      githubLink: 'https://github.com/GloriaSchaffarczyk/El-Pollo-Loco',
      reverseLayout: true,
    },
    {
      titleKey: 'PROJECT.POKEDEX.TITLE',
      descriptionKey: 'PROJECT.POKEDEX.DESCRIPTION',
      technologies: ['JavaScript', 'RESTful API', 'HTML', 'CSS'],
      imageSrc: 'assets/Portfolio_Pokedex_Laptop Mockup_01.gif',
      liveTestLink: 'http://pokedex.gloriacodes.de/',
      githubLink: 'https://github.com/GloriaSchaffarczyk/Pokedex',
      reverseLayout: false,
    },
  ];
}

