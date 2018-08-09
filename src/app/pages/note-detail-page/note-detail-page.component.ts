import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-note-detail-page',
  templateUrl: './note-detail-page.component.html',
  styleUrls: ['./note-detail-page.component.css']
})
export class NoteDetailPageComponent implements OnInit {
 note: any;
 user: any;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router,
    private authService: AuthService
    ) {
    this.route.params.subscribe((params) => {
      this.noteService.getOne(params.id)
      .then((response) => {
        console.log(response);
        this.note = response;

      })
      .catch((error) => {
        console.log(error);
      });
    });
  }
  ngOnInit() {
    this.user = this.authService.getUser();
  }

  handleDeleteClick(id) {
    this.noteService.deleteOne(id)
    .then(() => {
      this.router.navigate(['/user', this.user._id]);
    });
  }

}

