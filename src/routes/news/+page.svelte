<script lang="ts">
	import { page } from '$app/stores';
	import NewsCard from '$lib/components/ui/NewsCard.svelte';
	import EventCard from '$lib/components/ui/EventCard.svelte';
	import { news, events } from '$lib/data/content';

	const tabs = [
		{ id: 'news', label: 'Noticias' },
		{ id: 'events', label: 'Eventos' }
	];

	let activeTab = $derived($page.url.searchParams.get('tab') || 'news');

	function setTab(tabId: string) {
		const newUrl = new URL($page.url);
		newUrl.searchParams.set('tab', tabId);
		return newUrl.searchParams.toString();
	}
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
							: 'hover:text-budo-red-500 text-slate-500'}"
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
					<NewsCard
						title={article.title}
						excerpt={article.excerpt}
						date={article.date}
						category={article.category}
						image={article.image}
						slug={article.slug}
					/>
				{/each}
			</div>
		{:else}
			<!-- Events Tab Content -->
			<div class="space-y-6">
				{#each events as event (event.slug)}
					<EventCard
						title={event.title}
						description={event.description}
						date={event.date}
						location={event.location}
						eventType={event.eventType}
						image={event.image}
						slug={event.slug}
						featured={event.featured}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
