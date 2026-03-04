import ProjectList from "@/components/projects/ProjectList";
import HyperText from "@/components/ui/hyper-text";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-full m-7 lowercase">
      <div className="md:w-screen max-w-screen-lg mx-auto flex items-center gap-2">
        <span className="text-[#ff6b35] text-2xl font-bold">{">"}</span>
        <HyperText
          duration={500}
          animateOnHover={false}
          className="font-bold text-2xl"
        >
          my works
        </HyperText>
      </div>
      <ProjectList />
      <div className="flex items-center gap-2">
        <Link
          href={"https://www.github.com/kmr-ankitt"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center group hover:underline hover:underline-offset-4 gap-2 hover:text-[#ff6b35] transition-all duration-300"
        >
          more on github
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
