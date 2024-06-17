import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const http = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const auth = setContext((_, { headers, ...context }) => {
  const apiToken = context.token;

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
