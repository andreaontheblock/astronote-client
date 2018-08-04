import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }
  getOne() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}/id`, options)
     .toPromise();
  }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}`, options)
     .toPromise();

  }
}

