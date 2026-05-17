import type { PageServerLoad } from './$types';
import { getDirectors } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const directors = await getDirectors({ locale });

	return { directors };
};
