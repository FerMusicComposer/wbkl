<script lang="ts">
	import type { PageData } from './$types';
	import { Calendar, ArrowLeft } from 'lucide-svelte';
	import { getMediaUrl } from '$lib/api/media';
	import StrapiBlocks from '$lib/components/StrapiBlocks.svelte';

	let { data }: { data: PageData } = $props();

	let article = $derived(data.article);

	function getCategoryLabel(cat: string): string {
		if (data.locale === 'en') {
			switch (cat) {
				case 'news':
					return 'News';
				case 'event':
					return 'Event';
				case 'result':
					return 'Result';
				default:
					return 'News';
			}
		}
		switch (cat) {
			case 'news':
				return 'Noticia';
			case 'event':
				return 'Evento';
			case 'result':
				return 'Resultado';
			default:
				return 'Noticia';
		}
	}

	function getCategoryColor(cat: string): string {
		switch (cat) {
			case 'news':
				return 'bg-budo-red-500 text-white';
			case 'event':
				return 'bg-gold-500 text-midnight-900';
			case 'result':
				return 'bg-midnight-800 text-white';
			default:
				return 'bg-budo-red-500 text-white';
		}
	}

	function formatDate(dateStr: string): string {
		try {
			const date = new Date(dateStr);
			return date.toLocaleDateString(data.locale === 'en' ? 'en-US' : 'es-ES', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});
		} catch {
			return dateStr;
		}
	}
</script>

<svelte:head>
	{#if article}
		<title>{article.title} - World Budo Karate League</title>
		<meta name="description" content={article.excerpt || article.title} />
	{:else}
		<title>
			{data.locale === 'en' ? 'Article not found' : 'Artículo no encontrado'} - World Budo Karate League
		</title>
	{/if}
</svelte:head>

{#if article}
	<section class="border-b border-slate-200 bg-white py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<a
				href="/{data.locale}/news"
				class="hover:text-budo-red-500 mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>{data.locale === 'en' ? 'Back to News' : 'Volver a Noticias'}</span>
			</a>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(article.category)}"
				>
					{getCategoryLabel(article.category)}
				</span>
				<div class="flex items-center gap-1.5 text-sm text-slate-500">
					<Calendar class="h-4 w-4" />
					<span>{formatDate(article.publishedAt)}</span>
				</div>
			</div>
			<h1 class="text-midnight-900 text-3xl font-bold sm:text-4xl">{article.title}</h1>
		</div>
	</section>

	<article class="bg-dogi py-12 sm:py-16">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			{#if article.featuredImage}
				<img
					src={getMediaUrl(article.featuredImage, 'large')}
					alt={article.featuredImage.alternativeText || article.title}
					class="mb-8 w-full rounded-xl"
				/>
			{/if}
			<StrapiBlocks blocks={article.content} />
		</div>
	</article>
{:else}
	<section class="bg-dogi py-16 sm:py-20">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold">
				{data.locale === 'en' ? 'Article not found' : 'Artículo no encontrado'}
			</h1>
			<p class="mb-8 text-slate-600">
				{data.locale === 'en'
					? 'The article you are looking for does not exist or has been removed.'
					: 'El artículo que buscas no existe o ha sido eliminado.'}
			</p>
			<a
				href="/{data.locale}/news"
				class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
			>
				{data.locale === 'en' ? 'Back to News' : 'Volver a Noticias'}
			</a>
		</div>
	</section>
{/if}
