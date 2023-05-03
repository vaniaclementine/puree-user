import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

export default async function userSetupSatu(req, res) {
    const prisma = new PrismaClient();
    const session = await getServerSession(req, res, authOptions)
    const { email, phone, password } = req.body;

    if (req.method !== 'POST')  {
        res.status(500).json({ message: 'sorry' })
    }
    const response = await prisma.user.create({
        data: {
            email: session.user.email,
            phone: phone,
            password: password
        }
    })
    res.status(200).json(response)
}