import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '../../../../node_modules/@angular/router';
// import { MapService } from '../../services/map.service';
// import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.css']
})
export class CreateNotePageComponent implements OnInit {
  title: string;
  content: string;

  constructor(private noteService: NoteService, private router: Router) { }
  // private mapService: MapService

  ngOnInit() {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
    // const map = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/outdoors-v9',
    //   zoom: 5,
    //   center: [42.350388, -3.707206]
    // })
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
