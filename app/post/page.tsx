import Link from "next/link";
import { prisma } from "@/lib/db";
import { createPost, deletePost } from "../action/action";
import DeleteButton from "../components/deleteButton";
export const dynamic = 'force-dynamic'; // Add this at the top of the file


export default async function Page() {
  // Fetch all posts, newest first
  const posts = await prisma.post.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
       

        {/* Form Section */}
        <section className="mb-16">
          <form
            action={createPost}
            className="max-w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold mb-6 text-slate-800">
              Create New Post
            </h2>
            <div className="space-y-4">
              <input
                name="title"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="Post Title"
              />
              <textarea
                name="content"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all min-h-[120px]"
                placeholder="What's on your mind?"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-100"
              >
                Publish Post
              </button>
            </div>
          </form>
        </section>

        {/* Grid Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100 flex flex-col justify-between min-h-[420px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Accent Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-[#0066FF] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                    Post #{post.id}
                  </span>

<Link
      href={`/post/${post.id}/edit/`}
      className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </Link>

                  {/* Delete Action */}
                  <DeleteButton postId={post.id} deleteAction={deletePost} />

                  

                </div>

                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-500 line-clamp-4 leading-relaxed mb-8">
                  {post.content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <Link
                  href={`/post/${post.id}`}
                  className="flex items-center gap-4 w-fit group/link"
                >
                  <span className="text-[#0066FF] font-black text-sm uppercase tracking-wider">
                    View Post
                  </span>
                  <div className="w-12 h-[2px] bg-blue-100 relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500"></div>
                  </div>
                  <span className="text-blue-600 font-bold group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
