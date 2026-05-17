import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProgramBySlug } from '$lib/api/content';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { locale } = await parent();

	const program = await getProgramBySlug(params.slug, { locale });

	if (!program) {
		error(404, 'Program not found');
	}

	return { program };
};
