import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			const lang = event.params.lang || 'es';
			return html.replace('%lang%', lang);
		}
	});
	return response;
};
