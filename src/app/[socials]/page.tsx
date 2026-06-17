import { redirect } from "next/navigation";

const socials: { [key: string]: string } = {
  github: "https://www.github.com/kmr-ankitt",
  linkedin: "https://www.linkedin.com/in/kmrankitt/",
  leetcode: "https://leetcode.com/kmrankit/",
  x: "https://x.com/kmrankitt",
  twitter: "https://x.com/kmrankitt",
  instagram: "https://instagram.com/kmrankitt",
  insta: "https://instagram.com/kmrankitt",
  resume: "/resume.pdf",
  webresume: "/webresume.pdf",
  sysresume: "/sysresume.pdf",
  myresume: "/myresume.pdf",
  googleresume: "/googleresume.pdf",
  zoomresume: "/zoomresume.pdf",
  gsoc:"https://kmr-ankitt.github.io/gsoc/"
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
