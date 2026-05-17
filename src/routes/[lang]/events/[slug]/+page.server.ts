import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getEventBySlug } from '$lib/api/content';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { locale } = await parent();

	const event = await getEventBySlug(params.slug, { locale });

	if (!event) {
		error(404, 'Event not found');
	}

	return { event };
};
