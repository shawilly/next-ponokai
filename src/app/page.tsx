import ColorPalette from "@/_components/color-palette";
import Features from "@/_components/features";
import StatusLine from "@/_components/faux-status-line";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Install from "@/_components/install";

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      <Hero />
      <Features />
      <ColorPalette />
      <Install />
      <StatusLine whereami="~/ponokai/page.tsx" />
    </div>
  );
}
