import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { itemId, quantity } = req.body;
  
    try {
      const item = await prisma.item.findUnique({ where: { id: itemId } });
  
      if (!item) {
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
  
      const cart = await prisma.cart.create({
        data: {
          item: { connect: { id: itemId } },
          quantity,
          totalPrice: item.price * quantity,
          // user: { connect: { id: userId } }
        },
        include: { item: true },
      });
  
      res.status(200).json({ success: true, cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }