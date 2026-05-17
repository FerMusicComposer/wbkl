<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../../app.css';

	let { data, children } = $props();
</script>

<div class="bg-dogi text-midnight flex min-h-screen flex-col font-sans">
	<Header lang={data.locale} />

	<main class="grow">
		{@render children()}
	</main>

	<Footer lang={data.locale} />
</div>
