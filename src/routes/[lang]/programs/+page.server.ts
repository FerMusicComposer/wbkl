import type { PageServerLoad } from './$types';
import { getPrograms } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const programs = await getPrograms({ locale });

	return { programs };
};
