<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import News from '$lib/components/sections/News.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Dojos from '$lib/components/sections/Dojos.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>World Budo Karate League</title>
</svelte:head>

<Hero events={data.featuredEvents} lang={data.locale} />
<Events events={data.featuredEvents} lang={data.locale} />
<News articles={data.latestNews} lang={data.locale} />
<About lang={data.locale} />
<Dojos lang={data.locale} />
