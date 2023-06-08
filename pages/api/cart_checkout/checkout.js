import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { email } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: { email: { equals: email } },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const cart = await prisma.cart.findUnique({
      where: { userId: user.id },
      include: {
        cartItems: {
          include: { item: true },
        },
      },
    });

    if (!cart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }

    if (!cart.cartItems || cart.cartItems.length === 0) {
      res.status(400).json({ error: 'Cart is empty' });
      return;
    }

    // Calculate total price
    const totalPrice = cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.item.price * cartItem.quantity;
    }, 0);

    // Create an order
    const order = await prisma.order.create({
      data: {
        orderItems: {
          create: cart.cartItems.map((cartItem) => ({
            itemId: cartItem.itemId,
            quantity: cartItem.quantity,
          })),
        },
        totalPrice,
      },
    });

    // Clear the user's cart items
    await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
    });
  
    // Update the cart's totalPrice
    await prisma.cart.update({
        where: { id: cart.id },
        data: { totalPrice: 0 },
    });
    
    // Delete the cart itself
    await prisma.cart.delete({
        where: { id: cart.id },
    });
  


    res.json({ orderId: order.id });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'An error occurred during checkout' });
  }
}