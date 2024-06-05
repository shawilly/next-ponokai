import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { GeistSans } from "geist/font/sans";
import "highlight.js/styles/monokai-sublime.css";
import Head from "next/head";

export const metadata = {
  title: "Ponokai",
  description: "Pastelly Monokai theme for Neovim and Vim",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="from-bg0 via-bg1 to-bg2">
        <main className="flex flex-col bg-gradient-to-b text-white">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
