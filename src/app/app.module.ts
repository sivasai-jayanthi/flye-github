import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepositoryListComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
