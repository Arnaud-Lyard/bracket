import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
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
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArticleCreateInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type ArticleCreateOutput = {
  __typename?: 'ArticleCreateOutput';
  article: Article;
};

export type ArticleDeleteOutput = {
  __typename?: 'ArticleDeleteOutput';
  articleId: Scalars['ID'];
};

export type ArticleUpdateInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type ArticleUpdateOutput = {
  __typename?: 'ArticleUpdateOutput';
  article: Article;
};

export type ArticlesPagination = {
  __typename?: 'ArticlesPagination';
  nodes: Array<Article>;
  totalCount: Scalars['Float'];
};

export type ArticlesPaginationSortBy = {
  createdAt?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type Mutation = {
  __typename?: 'Mutation';
  articleCreate: ArticleCreateOutput;
  articleDelete: ArticleDeleteOutput;
  articleUpdate: ArticleUpdateOutput;
  userCreate: UserCreateOutput;
  userDelete: UserDeleteOutput;
  userUpdate: UserUpdateOutput;
};


export type MutationArticleCreateArgs = {
  input: ArticleCreateInput;
};


export type MutationArticleDeleteArgs = {
  articleId: Scalars['ID'];
};


export type MutationArticleUpdateArgs = {
  articleId: Scalars['ID'];
  input: ArticleUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  userId: Scalars['ID'];
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
  todoId: Scalars['ID'];
};

export type Node = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  articlesPagination: ArticlesPagination;
  sayHello: Scalars['String'];
  usersPagination: UsersPagination;
};


export type QueryArticlesPaginationArgs = {
  skip: Scalars['Int'];
  sortBy?: InputMaybe<ArticlesPaginationSortBy>;
  take: Scalars['Int'];
};


export type QueryUsersPaginationArgs = {
  skip: Scalars['Int'];
  sortBy?: InputMaybe<UsersPaginationSortBy>;
  take: Scalars['Int'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCreateInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  username: Scalars['String'];
};

export type UserCreateOutput = {
  __typename?: 'UserCreateOutput';
  user: User;
};

export type UserDeleteOutput = {
  __typename?: 'UserDeleteOutput';
  userId: Scalars['ID'];
};

export type UserUpdateInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateOutput = {
  __typename?: 'UserUpdateOutput';
  user: User;
};

export type UsersPagination = {
  __typename?: 'UsersPagination';
  nodes: Array<User>;
  totalCount: Scalars['Float'];
};

export type UsersPaginationSortBy = {
  createdAt?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type GetAllArticlesQueryVariables = Exact<{
  skip: Scalars['Int'];
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', articlesPagination: { __typename?: 'ArticlesPagination', totalCount: number, nodes: Array<{ __typename?: 'Article', createdAt: any, updatedAt: any, id: string, title: string, description: string }> } };

export type CreateArticleMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', articleCreate: { __typename?: 'ArticleCreateOutput', article: { __typename?: 'Article', id: string, title: string, description: string } } };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', articleDelete: { __typename?: 'ArticleDeleteOutput', articleId: string } };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', articleUpdate: { __typename?: 'ArticleUpdateOutput', article: { __typename?: 'Article', id: string, title: string, description: string } } };


export const GetAllArticlesDocument = gql`
    query getAllArticles($skip: Int!) {
  articlesPagination(skip: $skip, take: 5) {
    totalCount
    nodes {
      createdAt
      updatedAt
      id
      title
      description
    }
  }
}
    `;

/**
 * __useGetAllArticlesQuery__
 *
 * To run a query within a Vue component, call `useGetAllArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllArticlesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAllArticlesQuery({
 *   skip: // value for 'skip'
 * });
 */
export function useGetAllArticlesQuery(variables: GetAllArticlesQueryVariables | VueCompositionApi.Ref<GetAllArticlesQueryVariables> | ReactiveFunction<GetAllArticlesQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, variables, options);
}
export function useGetAllArticlesLazyQuery(variables: GetAllArticlesQueryVariables | VueCompositionApi.Ref<GetAllArticlesQueryVariables> | ReactiveFunction<GetAllArticlesQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, variables, options);
}
export type GetAllArticlesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetAllArticlesQuery, GetAllArticlesQueryVariables>;
export const CreateArticleDocument = gql`
    mutation createArticle($title: String!, $description: String!) {
  articleCreate(input: {title: $title, description: $description}) {
    article {
      id
      title
      description
    }
  }
}
    `;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateArticleMutation({
 *   variables: {
 *     title: // value for 'title'
 *     description: // value for 'description'
 *   },
 * });
 */
export function useCreateArticleMutation(options: VueApolloComposable.UseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
}
export type CreateArticleMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateArticleMutation, CreateArticleMutationVariables>;
export const DeleteArticleDocument = gql`
    mutation deleteArticle($id: ID!) {
  articleDelete(articleId: $id) {
    articleId
  }
}
    `;

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteArticleMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArticleMutation(options: VueApolloComposable.UseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument, options);
}
export type DeleteArticleMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation updateArticle($id: ID!, $title: String!, $description: String!) {
  articleUpdate(articleId: $id, input: {title: $title, description: $description}) {
    article {
      id
      title
      description
    }
  }
}
    `;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateArticleMutation({
 *   variables: {
 *     id: // value for 'id'
 *     title: // value for 'title'
 *     description: // value for 'description'
 *   },
 * });
 */
export function useUpdateArticleMutation(options: VueApolloComposable.UseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
}
export type UpdateArticleMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateArticleMutation, UpdateArticleMutationVariables>;