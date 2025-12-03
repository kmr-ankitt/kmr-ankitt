import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ reponame: string }>;
};

export default async function Page({ params }: PageProps) {
  const param = await params;
  redirect(`https://github.com/kmr-ankitt/${param.reponame}`);
}
