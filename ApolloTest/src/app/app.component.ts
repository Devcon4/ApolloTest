import { Component, Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import { gql } from 'apollo-angular-boost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApolloTest';

  constructor(apollo: Apollo) { }
}

@Injectable({
  providedIn: 'root'
})
export class AllBooksQuery extends Query {
  books = gql`
    query getBooks {
      books {
        title,
        author
      }
    }
  `
}
