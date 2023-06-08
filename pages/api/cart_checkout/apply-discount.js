import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { cartId } = req.body;
  
    try {
      const cart = await prisma.cart.findUnique({ where: { id: cartId }, include: { item: true } });
  
      if (!cart) {
        return res.status(404).json({ success: false, message: 'Cart not found' });
      }
  
      const discountedTotalPrice = cart.totalPrice * 0.95; // apply 5% discount
  
      const updatedCart = await prisma.cart.update({
        where: { id: cartId },
        data: { totalPrice: discountedTotalPrice },
      });
  
      res.status(200).json({ success: true, updatedCart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }