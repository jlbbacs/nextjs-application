import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { updatePost } from "@/action/action";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) }
  });

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Edit Post</h1>
        
        <form action={updatePost} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          {/* IMPORTANT: Hidden input to tell the action which post to update */}
          <input type="hidden" name="id" value={post.id} />

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Title</label>
              <input
                name="title"
                defaultValue={post.title} // Pre-fill the data
                className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Content</label>
              <textarea
                name="content"
                defaultValue={post.body} // Pre-fill the data
                className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}