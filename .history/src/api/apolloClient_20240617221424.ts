import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const http = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const auth = setContext((_, { headers }) => {
  const apiToken = "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";

  return {
    headers: {
      ...headers,
      authorization: apiToken ? `Bearer ${apiToken}` : "",
    },
  };
});

const client = new ApolloClient({
  link: auth.concat(http),
  cache: new InMemoryCache(),
});

export default client;
