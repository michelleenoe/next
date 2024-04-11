import Link from "next/link";

export const metadata = {
  title: "Frontpage",
  description: "This is the frontpage of the website",
};

export default function Home() {
  return <main>
    <h1>Hello World :D </h1>
    <Link href={"/henry"} prefetch={false}>
      Henry
    </Link>
  </main>;
}