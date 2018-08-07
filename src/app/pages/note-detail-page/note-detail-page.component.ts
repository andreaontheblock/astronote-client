import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-note-detail-page',
  templateUrl: './note-detail-page.component.html',
  styleUrls: ['./note-detail-page.component.css']
})
export class NoteDetailPageComponent implements OnInit {
 note: any;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
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
  }

}

