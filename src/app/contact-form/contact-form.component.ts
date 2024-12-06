import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule], //eigentlich sollte hier das formsModule stehen
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  http = inject(HttpClient);

  arrowSrc = '../../assets/home-arrow-white.png';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Hier kannst du die Daten verarbeiten (z.B. per HTTP senden)
    }
  }

  swapArrow(isHovered: boolean) {
    this.arrowSrc = isHovered
      ? '../../assets/home-arrow-green.png'
      : '../../assets/home-arrow-white.png';
  }

  // neuer Code

  // Die Daten sollen in einem Object gespeichert werden
  // contactData = {
  //   name: "",
  //   email: "",
  //   message: "",
  // }

  // mailTest = true;

  // post = {
  //   endPoint: 'https://deineDomain.de/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {

  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //     ngForm.resetForm();
  //   }
  // }
  
}
