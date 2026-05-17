import type { PageServerLoad } from './$types';
import { getDocuments } from '$lib/api/content';

export const load: PageServerLoad = async ({ parent }) => {
	const { locale } = await parent();

	const documents = await getDocuments({ locale });

	return { documents };
};
