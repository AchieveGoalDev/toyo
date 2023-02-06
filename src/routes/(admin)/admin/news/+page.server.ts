import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';

import { PrismaClient } from '@prisma/client';
import { findParentNodeClosestToPos } from '@tiptap/core';

const prisma = new PrismaClient();

//export const load: PageServerLoad = async () => {};

const post: Action = async ({ request }) => {
	const pageData = await request.formData();
	const title = pageData.get('title');
	const tags = pageData.get('tags');
	const content = pageData.get('content');
	const showCreated = true;
	const showUpdated = true;
	const visible = true;

	if (!title || !tags || !content) {
		return fail(400, { incomplete: true });
	}

	const data = {
		title,
		tags,
		content,
		visible,
		showCreated,
		showUpdated,
		author: { connect: { email: 'justin.smith@achievegoal.jp' } }
	};

	await prisma.article.create({ data });
};

export const actions: Actions = { post };

