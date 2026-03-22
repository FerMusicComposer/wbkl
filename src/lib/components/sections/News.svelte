<script lang="ts">
	import { Calendar } from 'lucide-svelte';

	interface NewsArticle {
		id: string;
		title: string;
		excerpt: string;
		date: string;
		category: 'news' | 'event' | 'result';
		image: string;
		imageAlt: string;
	}

	const articles: NewsArticle[] = [
		{
			id: 'world-championship-results',
			title: 'Resultados del Campeonato Mundial 2024',
			excerpt:
				'Los mejores atletas de Kyokushin de todo el mundo se reunieron para competir en el campeonato más prestigioso del año.',
			date: '15 Diciembre, 2024',
			category: 'result',
			image: '/images/tournament1.jpg',
			imageAlt: 'Competidores en el tatami durante el campeonato mundial'
		},
		{
			id: 'new-dojo-certification',
			title: 'Nuevo Programa de Certificación para Dojos',
			excerpt:
				'La WBKL lanza un programa integral de certificación que garantiza los más altos estándares de enseñanza del Kyokushin.',
			date: '10 Diciembre, 2024',
			category: 'news',
			image: '/images/tournament2.jpg',
			imageAlt: 'Instructores durante una sesión de certificación'
		},
		{
			id: 'seminar-announcement',
			title: 'Seminario Internacional de Kata en Barcelona',
			excerpt:
				'Anunciamos el próximo seminario internacional de Kata que se llevará a cabo en Barcelona el próximo mes de marzo.',
			date: '5 Diciembre, 2024',
			category: 'event',
			image: '/images/fighter1.png',
			imageAlt: 'Practicantes de kata durante un seminario'
		}
	];

	function getCategoryLabel(category: NewsArticle['category']): string {
		switch (category) {
			case 'news':
				return 'Noticia';
			case 'event':
				return 'Evento';
			case 'result':
				return 'Resultado';
		}
	}

	function getCategoryColor(category: NewsArticle['category']): string {
		switch (category) {
			case 'news':
				return 'bg-budo-red-500 text-white';
			case 'event':
				return 'bg-gold-500 text-midnight-900';
			case 'result':
				return 'bg-midnight-800 text-white';
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
			{#each articles as article (article.id)}
				<a
					href="/news/{article.id}"
					class="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
				>
					<!-- Image -->
					<div class="relative aspect-video overflow-hidden">
						<img
							src={article.image}
							alt={article.imageAlt}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
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
