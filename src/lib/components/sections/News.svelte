<script lang="ts">
	import { Calendar } from 'lucide-svelte';
	import { news } from '$lib/data/content';

	function getCategoryLabel(category: string): string {
		switch (category) {
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

	function getCategoryColor(category: string): string {
		switch (category) {
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
</script>

<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12 flex items-center justify-between">
			<h2 class="text-midnight-900 text-3xl font-bold">Noticias</h2>
			<a
				href="/news"
				class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
			>
				Ver todas →
			</a>
		</div>

		<!-- News Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each news as article (article.slug)}
				<a
					href="/news/{article.slug}"
					class="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
				>
					<!-- Image -->
					<div class="relative aspect-video overflow-hidden">
						{#if article.image}
							<img
								src={article.image}
								alt={article.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						{:else}
							<div class="flex h-full w-full items-center justify-center bg-slate-100">
								<Calendar class="h-12 w-12 text-slate-300" />
							</div>
						{/if}
						<!-- Category Badge -->
						<span
							class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(
								article.category
							)}"
						>
							{getCategoryLabel(article.category)}
						</span>
					</div>

					<!-- Content -->
					<div class="p-6">
						<!-- Date -->
						<div class="mb-3 flex items-center gap-1.5 text-sm text-slate-500">
							<Calendar class="h-4 w-4" />
							<span>{article.date}</span>
						</div>

						<!-- Title -->
						<h3
							class="text-midnight-900 group-hover:text-budo-red-500 mb-2 line-clamp-2 text-lg font-semibold transition-colors duration-200"
						>
							{article.title}
						</h3>

						<!-- Excerpt -->
						<p class="line-clamp-3 text-sm text-slate-600">
							{article.excerpt}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
