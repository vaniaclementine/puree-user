import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

export default async function userSetupDua(req, res) {
    const prisma = new PrismaClient();
    const session = await getServerSession(req, res, authOptions)
    const { name } = req.body;

    if (req.method !== 'POST')  {
        res.status(500).json({ message: 'sorry' })
    }
    const response = await prisma.user.update({
        where: {
            email: session.user.email
        },
        name: name
    })
    res.status(200).json(response)
}