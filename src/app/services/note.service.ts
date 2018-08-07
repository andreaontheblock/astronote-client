import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseURL = 'http://localhost:3000/note';

  constructor(private httpClient: HttpClient) { }

  createOne(noteInfo) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseURL}`, noteInfo, options)
     .toPromise();
  }

  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}/${id}`, options)
     .toPromise();
  }

  // getAllByUser(userId) {
  //   const options = {
  //     withCredentials: true
  //   };
  //   return this.httpClient.get(`${this.baseURL}/user/${userId}`, options)
  //    .toPromise();

  // }
}
