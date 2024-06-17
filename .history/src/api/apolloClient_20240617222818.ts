import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const http = createHttpLink({
  uri: "https://api.github.com/graphql", //this is generic. Ideally you want to store more sensitive links as .env variables
});

const auth = setContext((_, { headers, ...context }) => {
  const authorizationObject = context;
  const { apiToken } = authorizationObject;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${apiToken}`,
    },
  };
});

const client = new ApolloClient({
  link: auth.concat(http),
  cache: new InMemoryCache(),
});

export default client;
