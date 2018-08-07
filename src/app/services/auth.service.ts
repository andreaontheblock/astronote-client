import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseURL = 'http://localhost:3000/auth';

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  signup(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };

    const data = {username, password};

    return this.httpClient.post(`${this.baseURL}/signup`, data, options)
      .toPromise();
  }

  login(username: string, password: string) {
    const options = {
      withCredentials: true
    };
    const data = {username, password};
    return this.httpClient.post(`${this.baseURL}/login`, data, options)
    .toPromise();
  }

  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseURL}/logout`, {}, options)
      .toPromise();
  }

  getUser(): any {
    return this.user;
  }


}
