import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(
    public translationService: TranslationService,
    private navigationService: NavigationService
  ) {}

  http = inject(HttpClient);
  arrowSrc = '../../assets/home-arrow-white.png';

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  showPopup = false;
  popupMessage = '';
  popupColor = '#00bf89';

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      this.http.post('https://gloriacodes.de/sendMail.php', this.contactData).subscribe({
        next: () => {
          this.showPopupMessage(
            this.translationService.translate('CONTACT.SUCCESS_MESSAGE'),
            '#00bf89'
          );
          contactForm.resetForm();
          this.contactData = { name: '', email: '', message: '', privacy: false };
        },
        error: () => {
          this.showPopupMessage(
            this.translationService.translate('CONTACT.ERROR_MESSAGE'),
            '#ff3f79'
          );
        },
      });
    }
  }

  showPopupMessage(message: string, color: string) {
    this.popupMessage = message;
    this.popupColor = color;
    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  swapArrow(isHovered: boolean) {
    this.arrowSrc = isHovered
      ? '../../assets/home-arrow-green.png'
      : '../../assets/home-arrow-white.png';
  }

  navigateToSection(id: string): void {
    this.navigationService.navigateToSection(id);
  }
}
