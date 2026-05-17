import { fetchFromStrapi } from './client';
import type {
	Event,
	NewsArticle,
	Program,
	Person,
	Dojo,
	Document,
	EventType,
	ProgramCategory,
	NewsCategory,
	DocumentCategory,
	PersonType
} from './types';

export async function getEvents(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
		page?: number;
		pageSize?: number;
		featured?: boolean;
		eventType?: EventType;
	} = {}
): Promise<Event[]> {
	const filters: Record<string, unknown> = {};
	if (options.featured !== undefined) {
		filters.featured = { $eq: String(options.featured) };
	}
	if (options.eventType) {
		filters.eventType = { $eq: options.eventType };
	}

	try {
		return (await fetchFromStrapi<Event>('events', {
			locale: options.locale || 'es',
			populate: options.populate || ['featuredImage'],
			sort: options.sort || ['startDate:asc'],
			page: options.page,
			pageSize: options.pageSize,
			filters: Object.keys(filters).length > 0 ? filters : undefined
		})) as Event[];
	} catch {
		console.warn('[Strapi] Failed to fetch events');
		return [];
	}
}

export async function getEventBySlug(
	slug: string,
	options: { locale?: string } = {}
): Promise<Event | null> {
	try {
		const results = (await fetchFromStrapi<Event>('events', {
			locale: options.locale || 'es',
			populate: ['featuredImage', 'localizations'],
			filters: { slug: { $eq: slug } }
		})) as Event[];
		return results.length > 0 ? results[0] : null;
	} catch {
		console.warn(`[Strapi] Failed to fetch event with slug: ${slug}`);
		return null;
	}
}

export async function getNewsArticles(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
		page?: number;
		pageSize?: number;
		category?: NewsCategory;
	} = {}
): Promise<NewsArticle[]> {
	const filters: Record<string, unknown> = {};
	if (options.category) {
		filters.category = { $eq: options.category };
	}

	try {
		return (await fetchFromStrapi<NewsArticle>('news-articles', {
			locale: options.locale || 'es',
			populate: options.populate || ['featuredImage'],
			sort: options.sort || ['publishedAt:desc'],
			page: options.page,
			pageSize: options.pageSize,
			filters: Object.keys(filters).length > 0 ? filters : undefined
		})) as NewsArticle[];
	} catch {
		console.warn('[Strapi] Failed to fetch news articles');
		return [];
	}
}

export async function getNewsArticleBySlug(
	slug: string,
	options: { locale?: string } = {}
): Promise<NewsArticle | null> {
	try {
		const results = (await fetchFromStrapi<NewsArticle>('news-articles', {
			locale: options.locale || 'es',
			populate: ['featuredImage'],
			filters: { slug: { $eq: slug } }
		})) as NewsArticle[];
		return results.length > 0 ? results[0] : null;
	} catch {
		console.warn(`[Strapi] Failed to fetch news article with slug: ${slug}`);
		return null;
	}
}

export async function getPrograms(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
		page?: number;
		pageSize?: number;
		category?: ProgramCategory;
		featured?: boolean;
	} = {}
): Promise<Program[]> {
	const filters: Record<string, unknown> = {};
	if (options.category) {
		filters.category = { $eq: options.category };
	}
	if (options.featured !== undefined) {
		filters.featured = { $eq: String(options.featured) };
	}

	try {
		return (await fetchFromStrapi<Program>('programs', {
			locale: options.locale || 'es',
			populate: options.populate || ['image'],
			sort: options.sort || ['title:asc'],
			page: options.page,
			pageSize: options.pageSize,
			filters: Object.keys(filters).length > 0 ? filters : undefined
		})) as Program[];
	} catch {
		console.warn('[Strapi] Failed to fetch programs');
		return [];
	}
}

export async function getProgramBySlug(
	slug: string,
	options: { locale?: string } = {}
): Promise<Program | null> {
	try {
		const results = (await fetchFromStrapi<Program>('programs', {
			locale: options.locale || 'es',
			populate: ['image'],
			filters: { slug: { $eq: slug } }
		})) as Program[];
		return results.length > 0 ? results[0] : null;
	} catch {
		console.warn(`[Strapi] Failed to fetch program with slug: ${slug}`);
		return null;
	}
}

export async function getPeople(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
		personType?: PersonType;
	} = {}
): Promise<Person[]> {
	const filters: Record<string, unknown> = {};
	if (options.personType) {
		filters.personType = { $eq: options.personType };
	}

	try {
		return (await fetchFromStrapi<Person>('people', {
			locale: options.locale || 'es',
			populate: options.populate || ['image'],
			sort: options.sort || ['sortOrder:asc', 'name:asc'],
			filters: Object.keys(filters).length > 0 ? filters : undefined
		})) as Person[];
	} catch {
		console.warn('[Strapi] Failed to fetch people');
		return [];
	}
}

export async function getDirectors(options: { locale?: string } = {}): Promise<Person[]> {
	try {
		return (await fetchFromStrapi<Person>('people', {
			locale: options.locale || 'es',
			populate: ['image'],
			sort: ['sortOrder:asc', 'name:asc'],
			filters: { boardPosition: { $notNull: 'true' } }
		})) as Person[];
	} catch {
		console.warn('[Strapi] Failed to fetch directors');
		return [];
	}
}

export async function getDojos(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
	} = {}
): Promise<Dojo[]> {
	try {
		return (await fetchFromStrapi<Dojo>('dojos', {
			locale: options.locale || 'es',
			populate: options.populate || ['logo'],
			sort: options.sort || ['country:asc', 'city:asc']
		})) as Dojo[];
	} catch {
		console.warn('[Strapi] Failed to fetch dojos');
		return [];
	}
}

export async function getDocuments(
	options: {
		locale?: string;
		populate?: string[];
		sort?: string | string[];
		category?: DocumentCategory;
	} = {}
): Promise<Document[]> {
	const filters: Record<string, unknown> = {};
	if (options.category) {
		filters.category = { $eq: options.category };
	}

	try {
		return (await fetchFromStrapi<Document>('documents', {
			locale: options.locale || 'es',
			populate: options.populate || ['file'],
			sort: options.sort || ['title:asc'],
			filters: Object.keys(filters).length > 0 ? filters : undefined
		})) as Document[];
	} catch {
		console.warn('[Strapi] Failed to fetch documents');
		return [];
	}
}
