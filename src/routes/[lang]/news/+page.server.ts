import type { PageServerLoad } from './$types';
import { getNewsArticles, getEvents } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const [newsArticles, events] = await Promise.all([
		getNewsArticles({ locale, sort: ['publishedAt:desc'] }),
		getEvents({ locale, sort: ['startDate:asc'] })
	]);

	return { newsArticles, events };
};
