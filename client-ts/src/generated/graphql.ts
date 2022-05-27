import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { fetcher } from '../utils/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  age: Scalars['Int'];
  books: Array<Maybe<Book>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  genre: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor?: Maybe<Author>;
  addBook?: Maybe<Book>;
};


export type MutationAddAuthorArgs = {
  age: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationAddBookArgs = {
  authorId: Scalars['ID'];
  genre: Scalars['String'];
  name: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Author>>;
  book: Book;
  books: Array<Book>;
};


export type RootQueryTypeAuthorArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeBookArgs = {
  id: Scalars['ID'];
};

export type AddBookMutationVariables = Exact<{
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook?: { __typename?: 'Book', name: string, id: string } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'RootQueryType', authors?: Array<{ __typename?: 'Author', name: string, id: string }> | null };

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBookQuery = { __typename?: 'RootQueryType', book: { __typename?: 'Book', id: string, name: string, genre: string, author: { __typename?: 'Author', id: string, name: string, age: number, books: Array<{ __typename?: 'Book', name: string, id: string } | null> } } };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'RootQueryType', books: Array<{ __typename?: 'Book', name: string, id: string }> };


export const AddBookDocument = `
    mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    id
  }
}
    `;
export const useAddBookMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddBookMutation, TError, AddBookMutationVariables, TContext>) =>
    useMutation<AddBookMutation, TError, AddBookMutationVariables, TContext>(
      ['addBook'],
      fetcher<AddBookMutation, AddBookMutationVariables>(AddBookDocument),
      options
    );
export const GetAuthorsDocument = `
    query getAuthors {
  authors {
    name
    id
  }
}
    `;
export const useGetAuthorsQuery = <
      TData = GetAuthorsQuery,
      TError = unknown
    >(
      variables?: GetAuthorsQueryVariables,
      options?: UseQueryOptions<GetAuthorsQuery, TError, TData>
    ) =>
    useQuery<GetAuthorsQuery, TError, TData>(
      variables === undefined ? ['getAuthors'] : ['getAuthors', variables],
      fetcher<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument).bind(null, variables),
      options
    );
export const GetBookDocument = `
    query getBook($id: ID!) {
  book(id: $id) {
    id
    name
    genre
    author {
      id
      name
      age
      books {
        name
        id
      }
    }
  }
}
    `;
export const useGetBookQuery = <
      TData = GetBookQuery,
      TError = unknown
    >(
      variables: GetBookQueryVariables,
      options?: UseQueryOptions<GetBookQuery, TError, TData>
    ) =>
    useQuery<GetBookQuery, TError, TData>(
      ['getBook', variables],
      fetcher<GetBookQuery, GetBookQueryVariables>(GetBookDocument).bind(null, variables),
      options
    );
export const GetBooksDocument = `
    query getBooks {
  books {
    name
    id
  }
}
    `;
export const useGetBooksQuery = <
      TData = GetBooksQuery,
      TError = unknown
    >(
      variables?: GetBooksQueryVariables,
      options?: UseQueryOptions<GetBooksQuery, TError, TData>
    ) =>
    useQuery<GetBooksQuery, TError, TData>(
      variables === undefined ? ['getBooks'] : ['getBooks', variables],
      fetcher<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument).bind(null, variables),
      options
    );