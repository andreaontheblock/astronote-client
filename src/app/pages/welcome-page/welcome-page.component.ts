import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.user = this.authService.getUser();
  }

  ngOnInit() {
  }

}
