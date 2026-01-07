import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;
    const postId = Number(id);

    if (isNaN(postId)) return notFound();

    const post = await prisma.post.findUnique({
        where: { id: postId }
    });

    if (!post) return notFound();

    return (
        <main className="min-h-screen bg-white py-24 px-6">
            <article className="max-w-3xl mx-auto">
                
                {/* Navigation Toolbar */}
                <div className="flex justify-between items-center mb-12">
                    <Link 
                        href="/post" 
                        className="group flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest w-fit"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Feed
                    </Link>

                    {/* Edit Link for this specific post */}
                    <Link
                        href={`/post/${post.id}/edit`}
                        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit Post
                    </Link>
                </div>

                {/* Post Header */}
                <header className="mb-12">
                    <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Database Entry #{post.id}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mt-6 leading-[0.9] capitalize">
                        {post.title}
                    </h1>
                </header>

                {/* Post Content */}
                <div className="prose prose-slate max-w-none">
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                        {post.content}
                    </p>
                    
                    {post.content && (
                        <div className="mt-12 p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                            <p className="italic text-slate-500 text-lg">
                                {post.content}
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </main>
    );
}