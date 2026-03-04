export interface Repository {
  id: string;
  name: string;
  url: string;
  description: string | null;
  stargazerCount: number;
  tags: string[];
}

export async function fetchPinnedRepositories(): Promise<Repository[]> {
  const query = `
  {
    user(login: "kmr-ankitt") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            url
            description
            stargazerCount
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),

    // Next.js cache
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  return json.data.user.pinnedItems.nodes.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    url: repo.url,
    description: repo.description,
    stargazerCount: repo.stargazerCount,
    tags: repo.repositoryTopics.nodes.map((t: any) => t.topic.name),
  }));
}