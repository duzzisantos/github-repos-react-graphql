import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const useApolloRequest = (apiToken: string) => {
  const http = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const auth = setContext((_, { headers }) => {
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
};
