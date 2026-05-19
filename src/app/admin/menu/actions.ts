"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addMenuItem(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.menuItem.create({
    data: { name, description, price, category, imageUrl },
  });

  revalidatePath("/admin/menu");
  revalidatePath("/menu");
}

export async function deleteMenuItem(id: number) {
  await prisma.menuItem.delete({ where: { id } });
  revalidatePath("/admin/menu");
  revalidatePath("/menu");
}
