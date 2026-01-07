"use server"; // MUST BE AT THE TOP

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  // ... your create logic
  revalidatePath("/post");
}



export async function deletePost(formData: FormData) {
   const id = formData.get("id");
   // Now 'post' will be recognized by TypeScript!
   await prisma.post.delete({ where: { id: Number(id) } });
   revalidatePath("/post");
}

export async function updatePost(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.update({
    where: { id: Number(id) },
    data: { title, body: content }
  });

  revalidatePath("/post");
  redirect("/post");
}