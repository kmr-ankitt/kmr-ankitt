import React from "react";
import Link from "next/link";

interface RepoCardProps {
  repository: {
    id: string;
    name: string;
    url: string;
    stargazers: {
      totalCount: number;
    };
  };
  description: string;
  tags: string[];
}

const RepoCard: React.FC<RepoCardProps> = ({
  repository,
  description,
  tags,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md hover:shadow-lg hover:dark:border-zinc-500 duration-300 group transition-all">
      <Link href={repository.url}>
        <div className="flex items-center gap-2">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mb-2 fill-current text-gray-800 dark:text-gray-200"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <h2 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b35] duration-300 transition-all">
            {repository.name}
          </h2>
        </div>
        <p className="text-gray-500 mb-4">{description}</p>
        <p className="text-sm text-gray-400">
          ⭐ {repository.stargazers.totalCount} stars
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default RepoCard;
