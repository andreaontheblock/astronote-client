import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  // awebo pq son las propiedades q tienes en el form uwu
  // pork tiene q estar conectado sbs dijo felipen
  username: string;
  password: string;
//  i injected authservice in order for it to work uwu
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.signup(this.username, this.password)
        .then(() => {
         this.router.navigate(['/']);
        })
      .catch((err) => {
        this.error = err.error; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
      }
  }

}
