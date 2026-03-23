<script lang="ts">
	import { page } from '$app/stores';
	import NewsCard from '$lib/components/ui/NewsCard.svelte';
	import EventCard from '$lib/components/ui/EventCard.svelte';

	const tabs = [
		{ id: 'news', label: 'Noticias' },
		{ id: 'events', label: 'Eventos' }
	];

	// Get active tab from URL params
	$: activeTab = $page.url.searchParams.get('tab') || 'news';

	function setTab(tabId: string) {
		const newUrl = new URL($page.url);
		newUrl.searchParams.set('tab', tabId);
		return newUrl.searchParams.toString();
	}

	const news = [
		{
			slug: 'world-championship-results-2024',
			title: 'Resultados del Campeonato Mundial 2024',
			excerpt:
				'Los mejores atletas de Kyokushin de todo el mundo se reunieron para competir en el campeonato más prestigioso del año.',
			date: '15 Diciembre, 2024',
			category: 'result' as const,
			image: '/images/tournament1.jpg'
		},
		{
			slug: 'new-dojo-certification-program',
			title: 'Nuevo Programa de Certificación para Dojos',
			excerpt:
				'La WBKL lanza un programa integral de certificación que garantiza los más altos estándares de enseñanza del Kyokushin.',
			date: '10 Diciembre, 2024',
			category: 'news' as const,
			image: '/images/tournament2.jpg'
		},
		{
			slug: 'international-kata-seminar-barcelona',
			title: 'Seminario Internacional de Kata en Barcelona',
			excerpt:
				'Anunciamos el próximo seminario internacional de Kata que se llevará a cabo en Barcelona el próximo mes de marzo.',
			date: '5 Diciembre, 2024',
			category: 'event' as const,
			image: '/images/fighter1.png'
		},
		{
			slug: 'kyokushin-values-conference',
			title: 'Conferencia sobre Valores del Kyokushin',
			excerpt:
				'Expertos internacionales debaten sobre la importancia de preservar los valores tradicionales del Kyokushin en la era moderna.',
			date: '28 Noviembre, 2024',
			category: 'news' as const
		}
	];

	const events = [
		{
			slug: 'world-championship-2025',
			title: 'Campeonato Mundial de Kyokushin WBKL 2025',
			description:
				'La máxima competición de Karate Kyokushin a nivel mundial. Atletas de más de 80 países competirán por el título.',
			date: '15 - 20 Julio, 2025',
			location: 'Tokyo, Japón',
			eventType: 'championship' as const,
			image: '/images/tournament1.jpg',
			featured: true
		},
		{
			slug: 'european-cup-2025',
			title: 'Copa Europea WBKL Madrid 2025',
			description:
				'El campeonato europeo más importante del año. Participa o asiste a este evento que reúne a los mejores atletas del continente.',
			date: '8 - 10 Marzo, 2025',
			location: 'Madrid, España',
			eventType: 'championship' as const,
			image: '/images/tournament2.jpg'
		},
		{
			slug: 'seminar-osaka-2025',
			title: 'Seminario con Kancho - Osaka',
			description:
				'Aprende directamente del Kancho en este seminario exclusivo. Técnicas avanzadas, filosofía budo y entrenamiento intensivo.',
			date: '5 - 7 Abril, 2025',
			location: 'Osaka, Japón',
			eventType: 'seminar' as const
		},
		{
			slug: 'instructor-certification-2025',
			title: 'Certificación de Instructores Nivel 1',
			description:
				'Programa de certificación oficial para instructores de la WBKL. Obtén reconocimiento internacional.',
			date: '20 - 22 Marzo, 2025',
			location: 'Barcelona, España',
			eventType: 'clinic' as const
		}
	];
</script>

<svelte:head>
	<title>Noticias y Eventos - World Budo Karate League</title>
	<meta
		name="description"
		content="Mantente informado sobre las últimas noticias, eventos y resultados de la World Budo Karate League."
	/>
</svelte:head>

<!-- Page Header -->
<section
	class="from-midnight-900 via-midnight-800 to-midnight-900 relative flex min-h-150 items-center overflow-hidden bg-linear-to-br py-20 sm:py-28"
>
	<!-- Background Kanji -->
	<div class="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
		<img
			src="/images/kanji.svg"
			alt=""
			class="h-full w-full max-w-4xl object-contain opacity-5 invert"
		/>
	</div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl">
			<h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
				Noticias y <span class="text-gold-500">Eventos</span>
			</h1>
			<p class="text-xl text-slate-300">
				Mantente informado sobre las últimas novedades y próximos eventos de la WBKL.
			</p>
		</div>
	</div>
</section>

<!-- News & Events Content -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Tabs -->
		<div class="mb-8 border-b border-slate-200">
			<div class="flex gap-6">
				{#each tabs as tab (tab.id)}
					<a
						href="?{setTab(tab.id)}"
						class="px-1 pb-3 text-sm font-medium transition-colors duration-200 {activeTab ===
						tab.id
							? 'border-budo-red-500 text-budo-red-500 border-b-2'
							: 'text-slate-500 hover:text-slate-700'}"
					>
						{tab.label}
					</a>
				{/each}
			</div>
		</div>

		<!-- News Tab Content -->
		{#if activeTab === 'news'}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each news as article (article.slug)}
					<NewsCard {...article} />
				{/each}
			</div>
		{:else}
			<!-- Events Tab Content -->
			<div class="space-y-6">
				{#each events as event (event.slug)}
					<EventCard {...event} />
				{/each}
			</div>
		{/if}
	</div>
</section>
