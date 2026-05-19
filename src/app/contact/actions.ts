"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });
    
    revalidatePath("/admin"); // Revalidate admin dashboard where messages might be shown
    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact message:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
