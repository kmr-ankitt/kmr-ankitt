"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];

export default function Header() {
  const router = useRouter();

  const pathname = usePathname();

  function isKeyPressed() {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        if (e.key === "h") {
          e.preventDefault();
          router.push("/");
        } else if (e.key === "p") {
          e.preventDefault();
          router.push("/projects");
        }
      });
    }
  }

  useEffect(() => {
    isKeyPressed();
  });

  return (
    <div className="flex items-center justify-between m-3 mx-5 pt-5 mb-10">
      <div className="flex items-center gap-3 lowercase text-base">
        {routes.map((item, index) => {
          const isActive = item.route === pathname;
          return (
            <Link
              key={index}
              href={item.route}
              className={cn(
                "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                !isActive && "text-neutral-500",
              )}
            >
              <span className="relative px-2 py-[.20rem]">
                {"[" + item.name[0] + "] " + item.name}
                {item.route === pathname ? (
                  <motion.div
                    className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-[#ff6b35]"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
              </span>
            </Link>
          );
        })}
      </div>
      <ModeToggle />
    </div>
  );
}
