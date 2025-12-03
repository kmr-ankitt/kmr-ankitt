import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socials: { [key: string]: string } = {
  mail: "mailto:sahuankit.murhu@gmail.com",
  github: "https://www.github.com/kmr-ankitt",
  linkedin: "https://www.linkedin.com/in/kmrankitt/",
  leetcode: "https://leetcode.com/kmrankit/",
  twitter: "https://x.com/kmrankitt",
  insta: "https://instagram.com/kmrankitt",
  resume: "/webresume.pdf",
};

export default function Links() {
  return (
    <div className="lowercase my-10 flex flex-col gap-5 m-7">
      <h1 className="text-2xl font-extrabold">
        <span className="text-[#ff6b35]">{">"}</span> Links
      </h1>
      <div className="flex flex-wrap gap-3">
        {Object.keys(socials).map((key) => (
          <Link
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noreferrer"
            className="flex items-center group hover:underline hover:underline-offset-4 gap-2 hover:text-[#ff6b35] transition-all duration-300"
          >
            {key}
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
