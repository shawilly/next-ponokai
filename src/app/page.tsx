import StatusLine from "@/_components/faux-status-line";
import Hero from "@/_components/hero";

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className="min-w-screen min-h-screen">
      <Hero />
      <StatusLine whereami="./src/app/page.tsx" />
    </div>
  );
}
