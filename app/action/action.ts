"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      title: title,
      content: content, // Matches your schema!
    },
  });

  revalidatePath("/post");
  redirect("/post"); // Optional: Send them back to the list after creating
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id");
  await prisma.post.delete({ where: { id: Number(id) } });
  revalidatePath("/post");
}

export async function updatePost(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.update({
    where: { id: Number(id) },
    data: { 
      title: title, 
      content: content 
    },
  });

  revalidatePath("/post");
  redirect("/post");
}