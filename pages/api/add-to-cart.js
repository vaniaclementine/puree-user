import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next"

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { itemId, quantity } = req.body;
  const session = await getServerSession(req, res, authOptions)

  const userEmail = session.user.email;

  console.log(session);

  try {
    const item = await prisma.item.findUnique({ where: { id: itemId } });

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { Cart: true },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const cart = await prisma.cart.create({
      data: {
        item: { connect: { id: itemId } },
        quantity,
        totalPrice: item.price * quantity,
        User: { connect: { id: user.id } },
      },
      include: { item: true },
    });

    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}