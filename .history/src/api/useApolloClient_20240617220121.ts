import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const useApolloClient = (extractedToken: string) => {
  const http = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const auth = setContext((_, { headers }) => {
    const apiToken = extractedToken;

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

  return { client };
};

export default useApolloClient;
