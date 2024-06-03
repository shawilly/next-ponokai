// import { CreatePost } from "@/app/_components/create-post";
// import { api } from "@/trpc/server";
import StatusLine from "./_components/faux-status-line";
import Hero from "./_components/hero";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2b2d3a] to-[#363a4e] text-white">
      <Hero />
      {/* <div className="flex flex-col items-center gap-2"> */}
      {/*   <p className="text-2xl text-white"> */}
      {/*     {hello ? hello.greeting : "Loading tRPC query..."} */}
      {/*   </p> */}
      {/* </div> */}

      {/* <CrudShowcase /> */}
      <StatusLine />
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();
//
//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}
//
//       <CreatePost />
//     </div>
//   );
// }
