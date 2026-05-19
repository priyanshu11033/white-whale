"use server";

import prisma from "@/lib/prisma";

export async function processCheckout(formData: FormData, cartItems: { id: number, quantity: number, price: number }[], totalAmount: number) {
  try {
    const customerName = formData.get("name") as string;
    const customerEmail = formData.get("email") as string;
    const customerPhone = formData.get("phone") as string;
    const deliveryAddress = formData.get("address") as string;
    const deliveryNotes = formData.get("notes") as string;
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create Order and OrderItems in a transaction
    const order = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        deliveryAddress,
        deliveryNotes,
        totalAmount,
        status: "RECEIVED",
        items: {
          create: cartItems.map(item => ({
            menuItemId: item.id,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });

    return { success: true, orderId: order.id };
  } catch (error) {
    console.error("Checkout error:", error);
    return { error: "Failed to process order. Please try again." };
  }
}
