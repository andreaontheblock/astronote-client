import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {
    this.userService.getAll()
    .then(result => this.users = result);
  }

  ngOnInit() {
  }

}
