import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  isMe: Boolean = false;
  notes: Array<any>;
  user: any;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private noteService: NoteService
    ) {
    const currentUser = this.authService.getUser();
    this.route.params.subscribe((params) => {
      this.userService.getOne(params.id)
      .then((response) => {
        this.user = response[0];
        if (this.user._id === currentUser._id) {
          this.isMe = true;
         }
        this.notes = response[1];
      })
      .catch((error) => {
        console.log('ERROR');
      });
    });


  // this.userService.getOne(id)
  //     .then(response => this.user = response);
  }

  ngOnInit() {
  }

}
