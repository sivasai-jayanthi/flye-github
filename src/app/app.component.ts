import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  loadingRepos: boolean = false; // New flag for repository loading
  error: string = '';
  user: any = {};
  title='my githb repositories';
  repositories: any[] = [];
  pageSize: number = 8; // Number of repositories per page
  currentPage: number = 1; // Current page number

  constructor(private http: HttpClient) {}

  

  onSearch(username: string): void {
    this.loading = true;
    this.error = '';

    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch user details
    this.http.get<any>(userUrl).subscribe(
      (userData) => {
        this.user = userData;
      },
      (error) => {
        console.error('Error fetching user details:', error);
        this.error = 'Error fetching user details. Please try again later.';
        this.loading = false;
      }
    );
    

    // Fetch repositories
    this.http.get<any[]>(reposUrl).subscribe(
      (data: any[]) => {
        this.repositories = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.error = 'Error fetching repositories. Please try again later.';
        this.loading = false;
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getPaginatedRepositories(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.repositories.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.repositories.length / this.pageSize);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }
  
}
