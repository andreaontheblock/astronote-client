import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.css']
})
export class CreateNotePageComponent implements OnInit {
  title: string;
  content: string;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    if (form.valid) {
      const noteInfo = {
        title: this.title,
        content: this.content
      };
      this.noteService.createOne(noteInfo)
        .then((result: any) => {
         this.router.navigate(['/note', result._id]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
