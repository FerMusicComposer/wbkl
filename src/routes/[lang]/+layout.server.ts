import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const SUPPORTED_LOCALES = ['es', 'en'];
const DEFAULT_LOCALE = 'es';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang = params.lang;

	if (!lang || !SUPPORTED_LOCALES.includes(lang)) {
		error(404, `Locale '${lang}' is not supported`);
	}

	return {
		locale: lang || DEFAULT_LOCALE
	};
};
