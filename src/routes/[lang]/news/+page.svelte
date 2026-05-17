<script lang="ts">
	import type { PageData } from './$types';
	import NewsCard from '$lib/components/ui/NewsCard.svelte';
	import EventCard from '$lib/components/ui/EventCard.svelte';

	let { data }: { data: PageData } = $props();

	const tabs = $derived([
		{ id: 'news', label: data.locale === 'en' ? 'News' : 'Noticias' },
		{ id: 'events', label: data.locale === 'en' ? 'Events' : 'Eventos' },
		{ id: 'results', label: data.locale === 'en' ? 'Results' : 'Resultados' }
	]);

	let activeTab = $state('news');
</script>

<svelte:head>
	<title>
		{data.locale === 'en' ? 'News & Events' : 'Noticias y Eventos'} - World Budo Karate League
	</title>
	<meta
		name="description"
		content={data.locale === 'en'
			? 'Stay informed about the latest news, events, and results from the World Budo Karate League.'
			: 'Mantente informado sobre las últimas noticias, eventos y resultados de la World Budo Karate League.'}
	/>
</svelte:head>

<section
	class="from-midnight-900 via-midnight-800 to-midnight-900 relative flex min-h-150 items-center overflow-hidden bg-linear-to-br py-20 sm:py-28"
>
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
				{data.locale === 'en' ? 'News &' : 'Noticias y'}
				<span class="text-gold-500">
					{data.locale === 'en' ? ' Events' : ' Eventos'}
				</span>
			</h1>
			<p class="text-xl text-slate-300">
				{data.locale === 'en'
					? 'Stay informed about the latest news and upcoming events from the WBKL.'
					: 'Mantente informado sobre las últimas novedades y próximos eventos de la WBKL.'}
			</p>
		</div>
	</div>
</section>

<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 border-b border-slate-200">
			<div class="flex gap-6">
				{#each tabs as tab (tab.id)}
					<button
						onclick={() => (activeTab = tab.id)}
						class="px-1 pb-3 text-sm font-medium transition-colors duration-200 {activeTab ===
						tab.id
							? 'border-budo-red-500 text-budo-red-500 border-b-2'
							: 'text-slate-500 hover:text-slate-700'}"
					>
						{tab.label}
					</button>
				{/each}
			</div>
		</div>

		{#if activeTab === 'news'}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.newsArticles as article (article.slug)}
					<NewsCard {article} lang={data.locale} />
				{/each}
			</div>
		{:else if activeTab === 'events'}
			<div class="space-y-6">
				{#each data.events as event (event.slug)}
					<EventCard {event} lang={data.locale} />
				{/each}
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.newsArticles.filter((a) => a.category === 'result') as article (article.slug)}
					<NewsCard {article} lang={data.locale} />
				{/each}
			</div>
		{/if}
	</div>
</section>
