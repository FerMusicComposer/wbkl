<script lang="ts">
	import { Calendar } from 'lucide-svelte';

	interface Props {
		title: string;
		excerpt: string;
		date: string;
		category: 'news' | 'event' | 'result';
		image?: string;
		slug: string;
	}

	let { title, excerpt, date, category, image, slug }: Props = $props();

	function getCategoryLabel(cat: Props['category']): string {
		switch (cat) {
			case 'news':
				return 'Noticia';
			case 'event':
				return 'Evento';
			case 'result':
				return 'Resultado';
		}
	}

	function getCategoryColor(cat: Props['category']): string {
		switch (cat) {
			case 'news':
				return 'bg-budo-red-500 text-white';
			case 'event':
				return 'bg-gold-500 text-midnight-900';
			case 'result':
				return 'bg-midnight-800 text-white';
		}
	}
</script>

<a href="/news/{slug}?from=news" class="group">
	<article
		class="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
	>
		{#if image}
			<div class="relative aspect-video overflow-hidden">
				<img
					src={image}
					alt={title}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<span
					class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(
						category
					)}"
				>
					{getCategoryLabel(category)}
				</span>
			</div>
		{:else}
			<div class="relative flex aspect-video items-center justify-center bg-slate-100">
				<span
					class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(
						category
					)}"
				>
					{getCategoryLabel(category)}
				</span>
				<Calendar class="h-12 w-12 text-slate-300" />
			</div>
		{/if}
		<div class="p-6">
			<div class="mb-3 flex items-center gap-1.5 text-sm text-slate-500">
				<Calendar class="h-4 w-4" />
				<span>{date}</span>
			</div>
			<h3
				class="text-midnight-900 group-hover:text-budo-red-500 mb-2 line-clamp-2 text-lg font-semibold transition-colors duration-200"
			>
				{title}
			</h3>
			<p class="line-clamp-3 text-sm text-slate-600">
				{excerpt}
			</p>
		</div>
	</article>
</a>
