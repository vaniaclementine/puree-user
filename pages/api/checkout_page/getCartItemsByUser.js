import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const session = await getSession({ req });

    const { user } = session.user.email;

    
}