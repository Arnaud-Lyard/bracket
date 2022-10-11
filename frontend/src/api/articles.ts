import gql from "graphql-tag";

export const GET_ARTICLES = gql`
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

export const CREATE_ARTICLE = gql`
  mutation createArticle($title: String!, $description: String!) {
    articleCreate(input: { title: $title, description: $description }) {
      article {
        id
        title
        description
      }
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!) {
    articleDelete(articleId: $id) {
      articleId
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation updateArticle($id: ID!, $title: String!, $description: String!) {
    articleUpdate(
      articleId: $id
      input: { title: $title, description: $description }
    ) {
      article {
        id
        title
        description
      }
    }
  }
`;
