export type EventType = 'championship' | 'seminar' | 'clinic';
export type DocumentCategory = 'rules' | 'techniques' | 'certifications' | 'administrative';
export type ProgramCategory = 'kyokushin' | 'combat';
export type NewsCategory = 'news' | 'event' | 'result';
export type PersonType = 'member' | 'director';

export interface StrapiResponse<T> {
	data: T | T[];
	meta: {
		pagination?: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

export interface StrapiError {
	data: null;
	error: {
		status: number;
		name: string;
		message: string;
		details?: Record<string, unknown>;
	};
}

export interface StrapiMedia {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	url: string;
	mime: string;
	size: number;
	width: number | null;
	height: number | null;
	formats: {
		thumbnail?: { url: string; width: number; height: number };
		small?: { url: string; width: number; height: number };
		medium?: { url: string; width: number; height: number };
		large?: { url: string; width: number; height: number };
	} | null;
	createdAt: string;
	updatedAt: string;
}

export interface StrapiLocalizationRef {
	id: number;
	documentId: string;
	locale: string;
}

export interface StrapiBlock {
	type: string;
	level?: number;
	children?: StrapiBlockChild[];
	image?: { url: string; alternativeText?: string };
	format?: 'ordered' | 'unordered';
	[key: string]: unknown;
}

export interface StrapiBlockChild {
	type: string;
	text?: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	code?: boolean;
	href?: string;
	children?: StrapiBlockChild[];
	[key: string]: unknown;
}

export interface Person {
	id: number;
	documentId: string;
	name: string;
	title: string | null;
	personType: string | null;
	dan: string | null;
	role: string | null;
	boardPosition: string | null;
	country: string | null;
	sortOrder: number | null;
	image: StrapiMedia | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export interface Event {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	description: StrapiBlock[] | null;
	startDate: string;
	endDate: string | null;
	location: string | null;
	eventType: string;
	featuredImage: StrapiMedia | null;
	featured: boolean;
	registrationUrl: string | null;
	schedule: string | null;
	requirements: Record<string, unknown> | null;
	categories: string[] | Record<string, unknown> | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export interface Document {
	id: number;
	documentId: string;
	title: string;
	description: string | null;
	category: string;
	file: StrapiMedia | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export interface Program {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	excerpt: string | null;
	content: StrapiBlock[] | null;
	category: string;
	image: StrapiMedia | null;
	features: Record<string, unknown> | null;
	schedule: string | null;
	level: string | null;
	featured: boolean;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export interface NewsArticle {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	content: StrapiBlock[] | null;
	excerpt: string | null;
	featuredImage: StrapiMedia | null;
	category: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export interface Dojo {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	description: StrapiBlock[] | null;
	address: string | null;
	city: string | null;
	country: string;
	coordinates: { lat: number; lng: number } | null;
	phone: string | null;
	email: string | null;
	website: string | null;
	logo: StrapiMedia | null;
	verified: boolean;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	localizations: { data: StrapiLocalizationRef[] };
}

export type MediaFormat = 'thumbnail' | 'small' | 'medium' | 'large';
