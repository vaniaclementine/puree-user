import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//login logic

//insert data to cockroachdb using prisma client (example)
const merchant = await prisma.merchant.create({
    data: {
        email: 'johndoe@prisma.com',
        name: 'cosan',
        category: 'coffee',
        address: 'Jl. Srinindito',
    }
})