import { PrismaClient } from '@prisma/client'

export default async function userSetupDua(req, res) {
    const prisma = new PrismaClient();
    const { name } = req.body;

    if (req.method !== 'POST')  {
        res.status(500).json({ message: 'sorry' })
    }
    const response = await prisma.user.create({
        name: name
    })
    res.status(200).json(response)
}