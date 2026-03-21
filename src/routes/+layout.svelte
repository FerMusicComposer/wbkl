<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	let { children } = $props();
</script>

<div class="bg-dogi text-midnight flex min-h-screen flex-col font-sans">
	<Header />

	<main class="grow">
		{@render children()}
	</main>

	<Footer />
</div>
