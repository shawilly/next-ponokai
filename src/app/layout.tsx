import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { GeistSans } from "geist/font/sans";
import "highlight.js/styles/monokai-sublime.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Ponokai",
  description: "Pastelly Monokai theme for Neovim and Vim",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="from-bg0 via-bg1 to-bg2">
        <main className="flex flex-col bg-gradient-to-b text-white">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
