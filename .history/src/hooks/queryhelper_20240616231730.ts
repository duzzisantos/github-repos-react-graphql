import { gql } from "@apollo/client";

const GET_ALL_REPOSITORIES = gql`
  query {
    viewer {
      repositories(first: 50) {
        nodes {
          id
          name
          owner {
            login
          }
          visibility
          stargazerCount
          forkCount
          url
          issues {
            totalCount
          }
          licenseInfo {
            name
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

const GET_REPOSITORY_BY_ID = gql`
  query ($id: ID!) {
    node(id: $id) {
      ... on Repository {
        id
        name
        owner {
          login
        }
        visibility
        stargazerCount
        forkCount
        url
        issues {
          totalCount
        }
        licenseInfo {
          name
        }
        updatedAt
        createdAt
      }
    }
  }
`;

export { GET_ALL_REPOSITORIES, GET_REPOSITORY_BY_ID };