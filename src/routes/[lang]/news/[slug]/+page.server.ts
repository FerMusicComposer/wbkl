import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getNewsArticleBySlug } from '$lib/api/content';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { locale } = await parent();

	const article = await getNewsArticleBySlug(params.slug, { locale });

	if (!article) {
		error(404, 'Article not found');
	}

	return { article };
};
