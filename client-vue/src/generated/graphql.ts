import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
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

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'RootQueryType', books: Array<{ __typename?: 'Book', name: string, id: string }> };


export const BooksDocument = gql`
    query Books {
  books {
    name
    id
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a Vue component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBooksQuery();
 */
export function useBooksQuery(options: VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, {}, options);
}
export function useBooksLazyQuery(options: VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BooksQuery, BooksQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, {}, options);
}
export type BooksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BooksQuery, BooksQueryVariables>;