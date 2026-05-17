import type { PageServerLoad } from './$types';
import { getEvents, getPrograms, getNewsArticles } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const [featuredEvents, featuredPrograms, latestNews] = await Promise.all([
		getEvents({ locale, featured: true, pageSize: 3, sort: ['startDate:asc'] }),
		getPrograms({ locale, featured: true, pageSize: 2 }),
		getNewsArticles({ locale, pageSize: 5, sort: ['publishedAt:desc'] })
	]);

	return {
		featuredEvents,
		featuredPrograms,
		latestNews
	};
};
