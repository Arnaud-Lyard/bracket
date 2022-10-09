import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { logErrorMessages } from "@vue/apollo-util";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4200/graphql",
});

const errorLink = onError((error) => {
  if (
    error.graphQLErrors &&
    error.graphQLErrors[0].message === "Unauthorized"
  ) {
    localStorage.removeItem("token");
    // vue router is not ready at this moment
    window.location.reload();
  }
  logErrorMessages(error);
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
