import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Octokit } from "octokit";

export interface Repository {
  name: string;
  id: string;
  url: string;
  stargazers: {
    totalCount: number;
  };
}

export const fetchPinnedRepositories = async () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "kmr-ankitt") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  id
                  url
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  return user.pinnedItems.edges.map((edge: { node: unknown }) => edge.node);
};

export const fetchRepositoryDescriptions = async (
  pinnedItems: Repository[],
): Promise<string[]> => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repoDescription = await Promise.all(
    pinnedItems.map(async (item) => {
      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: "kmr-ankitt",
        repo: item.name,
      });
      return data;
    }),
  );

  return repoDescription
    .filter((item) => item.description !== null)
    .map((item) => item.description as string);
};

export const fetchRepoTags = async (pinnedItems: Repository[]) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repoTags = await Promise.all(
    pinnedItems.map(async (item) => {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/topics",
        {
          owner: "kmr-ankitt",
          repo: item.name,
        },
      );
      return data;
    }),
  );

  return repoTags.map((item) => item.names);
};
