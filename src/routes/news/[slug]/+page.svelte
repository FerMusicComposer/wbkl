<script lang="ts">
	import { page } from '$app/stores';
	import { getNewsArticle } from '$lib/data/content';
	import { Calendar, ArrowLeft } from 'lucide-svelte';

	// Get article from slug
	$: slug = $page.params.slug ?? '';
	$: article = slug ? getNewsArticle(slug) : undefined;

	function getCategoryLabel(cat: string): string {
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

	// Determine if we came from news or events tab
	$: backTab = $page.url.searchParams.get('from') || 'news';
</script>

<svelte:head>
	{#if article}
		<title>{article.title} - World Budo Karate League</title>
		<meta name="description" content={article.excerpt} />
	{:else}
		<title>Artículo no encontrado - World Budo Karate League</title>
	{/if}
</svelte:head>

{#if article}
	<!-- Page Header -->
	<section class="border-b border-slate-200 bg-white py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<a
				href="/news?tab={backTab}"
				class="hover:text-budo-red-500 mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>Volver a {backTab === 'events' ? 'Eventos' : 'Noticias'}</span>
			</a>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(article.category)}"
				>
					{getCategoryLabel(article.category)}
				</span>
				<div class="flex items-center gap-1.5 text-sm text-slate-500">
					<Calendar class="h-4 w-4" />
					<span>{article.date}</span>
				</div>
			</div>
			<h1 class="text-midnight-900 text-3xl font-bold sm:text-4xl">{article.title}</h1>
		</div>
	</section>

	<!-- Article Content -->
	<article class="bg-dogi py-12 sm:py-16">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			{#if article.image}
				<img src={article.image} alt={article.title} class="mb-8 w-full rounded-xl" />
			{/if}
			<div class="prose prose-lg max-w-none prose-slate">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html article.content}
			</div>
		</div>
	</article>
{:else}
	<!-- Not Found -->
	<section class="bg-dogi py-16 sm:py-20">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold">Artículo no encontrado</h1>
			<p class="mb-8 text-slate-600">El artículo que buscas no existe o ha sido eliminado.</p>
			<a
				href="/news"
				class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
			>
				Volver a Noticias
			</a>
		</div>
	</section>
{/if}
