import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserRepositories(username: string): Observable<any> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url).pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError('User not found');
        } else {
          return throwError('An error occurred');
        }
      })
    );
  }
}
