"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.blogPost.create({
    data: { title, content, imageUrl },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

export async function deleteBlogPost(id: number) {
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}
