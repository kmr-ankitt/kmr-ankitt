import {
  fetchPinnedRepositories,
  fetchRepositoryDescriptions,
  fetchRepoTags,
  Repository,
} from "@/api/fetchRepo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RepoCard from "../home/RepoCard";

export default async function SelectedProjects() {
  const pinnedItems: Repository[] = await fetchPinnedRepositories();
  const topItems = pinnedItems.slice(0, 3);
  const repoDesc: string[] = await fetchRepositoryDescriptions(topItems);
  const repoTags = await fetchRepoTags(topItems);

  return (
    <div>
      <h1 className="text-2xl font-extrabold">
        <span className="text-[#ff6b35]">{">"}</span> projects
      </h1>
      <div className="flex flex-col gap-10 my-5 lowercase">
        <div className="grid grid-cols-1 gap-6">
          {topItems.map((item, index) => (
            <RepoCard
              key={item.id}
              repository={item}
              description={repoDesc[index]}
              tags={repoTags[index]}
            />
          ))}
        </div>
      </div>
      <div>
        <Link
          href="/projects"
          className="text-base w-fit flex items-center group hover:underline hover:underline-offset-4 gap-2 hover:text-[#ff6b35] transition-all duration-300"
        >
          see all
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
