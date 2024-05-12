import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';

  @Output() searchUsername: EventEmitter<string> = new EventEmitter<string>();

  search(): void {
    this.searchUsername.emit(this.username);
  }
}
