import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: PageServerLoad = async () => {
	const articleData = await prisma.article.findMany({ include: { author: true } });

	return {articleData};
};
