import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { name } = req.query

    try {
        const items = await prisma.user.findFirst({
            where: {
                name: name
            },
            include: {
                Merchant: {
                    include: {
                        Item: true,
                    }
                }
            }
        });
        const itemFromRelation = items?.Merchant.Item || [];
        res.status(200).json({ success: true, items });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
        
    }
}