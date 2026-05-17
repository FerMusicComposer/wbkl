import type { PageServerLoad } from './$types';
import { getDojos, getPeople } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const [dojos, members] = await Promise.all([getDojos({ locale }), getPeople({ locale })]);

	return { dojos, members };
};
