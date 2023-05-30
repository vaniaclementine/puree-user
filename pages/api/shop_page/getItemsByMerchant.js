import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    try {
        const items = await prisma.item.findMany({
            select: {
                name: true
            },
            where: {

            }
        })
    } catch (error) {
        
    }
}