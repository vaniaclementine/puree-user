import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { itemName, merchantName } = req.query

    console.log(itemName);
    console.log(merchantName);

    try {
        const item = await prisma.item.findFirst({
            where: {
              name: itemName,
              Merchant: {
                User: {
                  name: merchantName
                }
              }
            }
          });
      
          if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
          }
      
          res.status(200).json({ success: true, item });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}