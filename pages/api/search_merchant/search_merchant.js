import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const merchants = await prisma.merchant.findMany({
      where: {
        User: {
          name: {
            contains: name.toLowerCase(),
          },
        },
      },
      select: {
        id: true,
        User: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    res.json(merchants);
  } catch (error) {
    console.error('Error searching for merchant:', error);
    res.status(500).json({ error: 'An error occurred while searching for merchant' });
  }
}
