import {
  fetchPinnedRepositories,
  Repository,
} from "@/api/fetchRepo";
import RepoCard from "../home/RepoCard";

export default async function ProjectList() {
  const pinnedItems: Repository[] = await fetchPinnedRepositories();
  const repoDesc: string[] = pinnedItems.map((item) => item.description || "No description");
  const repoTags = pinnedItems.map((item) => item.tags);

  return (
    <div className="flex flex-col gap-5 my-5 lowercase">
      <div className="grid grid-cols-1 gap-6">
        {pinnedItems.map((item, index) => (
          <RepoCard
            key={item.id}
            repository={item}
            description={repoDesc[index]}
            tags={repoTags[index]}
          />
        ))}
      </div>
    </div>
  );
}
