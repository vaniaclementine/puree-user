import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { merchantName } = req.query

    try {
        const items = await prisma.user.findFirst({
            where: {
                name: merchantName
            },
            select: {
                name: true,
                Merchant: {
                    select: {
                        Item: true
                    }
                }
            }
        });

        const name = items?.name || '';
        const records = items?.Merchant.Item || [];
        res.status(200).json({ success: true, name, records });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
        
    }
}