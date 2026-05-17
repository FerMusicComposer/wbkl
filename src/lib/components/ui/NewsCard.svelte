<script lang="ts">
	import { Calendar } from 'lucide-svelte';
	import { getMediaUrl } from '$lib/api/media';
	import type { NewsArticle } from '$lib/api/types';

	interface Props {
		article: NewsArticle;
		lang?: string;
	}

	let { article, lang = 'es' }: Props = $props();

	function getCategoryLabel(cat: string): string {
		if (lang === 'en') {
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
			return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});
		} catch {
			return dateStr;
		}
	}
</script>

<a href="/{lang}/news/{article.slug}" class="group">
	<article
		class="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
	>
		{#if article.featuredImage}
			<div class="relative aspect-video overflow-hidden">
				<img
					src={getMediaUrl(article.featuredImage, 'medium')}
					alt={article.featuredImage.alternativeText || article.title}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<span
					class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(
						article.category
					)}"
				>
					{getCategoryLabel(article.category)}
				</span>
			</div>
		{:else}
			<div class="relative flex aspect-video items-center justify-center bg-slate-100">
				<span
					class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(
						article.category
					)}"
				>
					{getCategoryLabel(article.category)}
				</span>
				<Calendar class="h-12 w-12 text-slate-300" />
			</div>
		{/if}
		<div class="p-6">
			<div class="mb-3 flex items-center gap-1.5 text-sm text-slate-500">
				<Calendar class="h-4 w-4" />
				<span>{formatDate(article.publishedAt)}</span>
			</div>
			<h3
				class="text-midnight-900 group-hover:text-budo-red-500 mb-2 line-clamp-2 text-lg font-semibold transition-colors duration-200"
			>
				{article.title}
			</h3>
			{#if article.excerpt}
				<p class="line-clamp-3 text-sm text-slate-600">
					{article.excerpt}
				</p>
			{/if}
		</div>
	</article>
</a>
