import Image from "next/image";

import { CreatePost } from "@/app/_components/create-post";
import ponokaiLogo from "@/assets/basic-ponokai.svg";
import neovimSmallLogo from "@/assets/neovim-small-logo.svg";
import seaLines from "@/assets/sea-lines.svg";
import vimLogo from "@/assets/vim-logo.svg";
import { api } from "@/trpc/server";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import AdventureIcon from "./_components/adventure-icon";
import StatusLine from "./_components/faux-status-line";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2b2d3a] to-[#363a4e] text-white">
      <div>
        <div className="lg:g-16 lg:ml-16 lg:mr-16 lg:grid lg:grid-cols-2 lg:pl-16 lg:pr-16">
          <div className="ml-12 mr-12 flex flex-col pb-12 pt-12 md:ml-16 md:mr-16 md:pb-16 md:pt-16">
            <Link href="https://github.com/shawilly/ponokai" target="_blank">
              <div className="flex h-1/4 flex-row flex-wrap items-center justify-start">
                <Image
                  priority
                  height={40}
                  src={seaLines as StaticImport}
                  alt=""
                />
                <div className="ml-4 pb-[3px] pt-[3px]">
                  <Image
                    priority
                    height={34}
                    src={ponokaiLogo as StaticImport}
                    alt="Ponokai, the pastelly Monokaiesque color scheme"
                  />
                </div>
              </div>
            </Link>
            <div className="h-5/8 mb-12 mt-12 flex grow flex-col flex-wrap items-center justify-center pb-12 pt-12 ">
              <div className="flex flex-col flex-wrap justify-center gap-5 text-left">
                <h1 className="from-pred to-pyellow bg-gradient-to-r bg-clip-text text-7xl font-black text-transparent">
                  A pastelly Monokaiesque color scheme
                </h1>
                <p className="text-left text-2xl">
                  Consistent <span className="text-pgreen">c</span>
                  <span className="text-pred">o</span>
                  <span className="text-porange">l</span>
                  <span className="text-pyellow">o</span>
                  <span className="text-pgreen">r</span>
                  <span className="text-ppurple">s</span>, constant{" "}
                  <span className="text-pgreen">(pono)</span> sea{" "}
                  <span className="text-pblue">(kai)</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="container flex flex-col gap-12">
                <div className="from-pblue via-fg to-pgreen inline-block bg-gradient-to-r bg-clip-text text-center font-extrabold text-transparent sm:text-[2rem]">
                  choose your weapon.
                </div>
                <div className="mt-10 flex flex-row flex-wrap items-center justify-around md:mt-0">
                  <AdventureIcon
                    className="h-[150px] w-[150px]"
                    href=""
                    src={neovimSmallLogo as StaticImport}
                    alt="Neovim logo"
                  />
                  <AdventureIcon
                    className="h-[150px] w-[150px]"
                    href=""
                    src={vimLogo as StaticImport}
                    alt="Vim logo"
                  />
                </div>
                {/* <div className="flex flex-col items-center gap-2"> */}
                {/*   <p className="text-2xl text-white"> */}
                {/*     {hello ? hello.greeting : "Loading tRPC query..."} */}
                {/*   </p> */}
                {/* </div> */}

                {/* <CrudShowcase /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatusLine />
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
