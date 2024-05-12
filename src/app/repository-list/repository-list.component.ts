import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input() repositories: any[] = [];
  @Input() loading: boolean = false;
  @Input() error: string = '';

  pageSize: number = 10;
  currentPage: number = 1;

  // Method to handle next page navigation
  nextPage(): void {
    this.currentPage++;
  }

  // Method to handle previous page navigation
  prevPage(): void {
    this.currentPage--;
  }

  // Method to get paginated repositories based on current page and page size
  getPaginatedRepositories(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.repositories.slice(startIndex, endIndex);
  }

  // Method to get page numbers for pagination
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.repositories.length / this.pageSize);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
}
