/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBooks
// ====================================================

export interface getBooks_books {
  __typename: "Book";
  title: string | null;
  author: string | null;
}

export interface getBooks {
  books: (getBooks_books | null)[] | null;
}
