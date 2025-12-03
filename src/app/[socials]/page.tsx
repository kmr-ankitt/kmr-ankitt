import { redirect } from "next/navigation";

const socials: { [key: string]: string } = {
  github: "https://www.github.com/kmr-ankitt",
  linkedin: "https://www.linkedin.com/in/kmrankitt/",
  leetcode: "https://leetcode.com/kmrankit/",
  x: "https://x.com/kmrankitt",
  twitter: "https://x.com/kmrankitt",
  instagram: "https://instagram.com/kmrankitt",
  insta: "https://instagram.com/kmrankitt",
  resume: "/myresume.pdf",
  oldresume: "/resume.pdf",
  webresume: "/webresume.pdf",
};

type Socials = keyof typeof socials;

export default async function page({
  params,
}: {
  params: Promise<{ socials: Socials }>;
}) {
  const { socials: socialKey } = await params;

  const url = socials[socialKey];
  if (url) {
    redirect(url);
  } else {
    redirect("/");
  }
}
