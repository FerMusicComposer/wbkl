<script lang="ts">
	import type { PageData } from './$types';
	import { Clock, Award, Users } from 'lucide-svelte';
	import { getMediaUrl } from '$lib/api/media';
	import Button from '$lib/components/ui/Button.svelte';

	let { data }: { data: PageData } = $props();

	let kyokushinPrograms = $derived(data.programs.filter((p) => p.category === 'kyokushin'));
	let combatPrograms = $derived(data.programs.filter((p) => p.category === 'combat'));

	function getFeaturesList(features: Record<string, unknown> | null): string[] {
		if (!features) return [];
		if (Array.isArray(features)) return features as string[];
		return [];
	}
</script>

<svelte:head>
	<title>
		{data.locale === 'en' ? 'Programs' : 'Programas'} - World Budo Karate League
	</title>
	<meta
		name="description"
		content={data.locale === 'en'
			? 'Discover our training programs: Kyokushin for adults and kids, Kickboxing, Boxing, and Krav Maga. Classes for all levels.'
			: 'Descubre nuestros programas de entrenamiento: Kyokushin para adultos y niños, Kickboxing, Boxeo y Krav Maga. Clases para todos los niveles.'}
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
				{data.locale === 'en' ? 'Our' : 'Nuestros'}
				<span class="text-gold-500"> {data.locale === 'en' ? 'Programs' : 'Programas'}</span>
			</h1>
			<p class="text-xl text-slate-300">
				{data.locale === 'en'
					? 'We offer a variety of martial arts programs for all ages and levels.'
					: 'Ofrecemos una variedad de programas de artes marciales para todas las edades y niveles.'}
			</p>
		</div>
	</div>
</section>

<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">
				{data.locale === 'en' ? 'Kyokushin Karate' : 'Karate Kyokushin'}
			</h2>
			<p class="max-w-3xl text-slate-600">
				{data.locale === 'en'
					? 'The most practiced full-contact style in the world. Develop strength, technical discipline, and an indomitable spirit.'
					: 'El estilo de contacto completo más practicado del mundo. Desarrolla fuerza, disciplina técnica y espíritu indomable.'}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			{#each kyokushinPrograms as program (program.documentId)}
				<article
					class="hover:border-budo-red-200 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-lg"
				>
					{#if program.image}
						<div class="relative aspect-video overflow-hidden">
							<img
								src={getMediaUrl(program.image, 'large')}
								alt={program.title}
								class="h-full w-full object-cover"
							/>
							<div
								class="from-midnight-900/80 absolute inset-0 bg-linear-to-t to-transparent"
							></div>
							<div class="absolute bottom-4 left-4">
								{#if program.featured}
									<span
										class="bg-budo-red-500 rounded-full px-3 py-1 text-xs font-medium text-white"
									>
										{data.locale === 'en' ? 'Featured Program' : 'Programa Destacado'}
									</span>
								{/if}
							</div>
						</div>
					{/if}
					<div class="p-6">
						<h3 class="text-midnight-900 mb-2 text-xl font-semibold">{program.title}</h3>
						{#if program.excerpt}
							<p class="mb-4 text-slate-600">{program.excerpt}</p>
						{/if}

						<div class="mb-4 flex flex-wrap gap-4 text-sm">
							{#if program.level}
								<div class="flex items-center gap-1.5 text-slate-600">
									<Users class="text-budo-red-500 h-4 w-4" />
									<span>{program.level}</span>
								</div>
							{/if}
							{#if program.schedule}
								<div class="flex items-center gap-1.5 text-slate-600">
									<Clock class="text-budo-red-500 h-4 w-4" />
									<span>{program.schedule}</span>
								</div>
							{/if}
						</div>

						{#if getFeaturesList(program.features).length > 0}
							<ul class="mb-6 space-y-2">
								{#each getFeaturesList(program.features) as feature, i (i)}
									<li class="flex items-start gap-2 text-sm text-slate-600">
										<Award class="text-budo-red-500 mt-0.5 h-4 w-4 shrink-0" />
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						{/if}

						<a
							href="/{data.locale}/programs/{program.slug}"
							class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
						>
							{data.locale === 'en' ? 'More information' : 'Más información'} →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">
				{data.locale === 'en' ? 'Combat Martial Arts' : 'Artes Marciales de Combate'}
			</h2>
			<p class="max-w-3xl text-slate-600">
				{data.locale === 'en'
					? 'Complementary programs to improve your fitness, combat techniques, and self-defense skills.'
					: 'Programas complementarios para mejorar tu condición física, técnicas de combate y habilidades de autodefensa.'}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each combatPrograms as program (program.documentId)}
				<article
					class="hover:border-budo-red-200 flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-lg"
				>
					{#if program.image}
						<div class="relative aspect-video overflow-hidden">
							<img
								src={getMediaUrl(program.image, 'medium')}
								alt={program.title}
								class="h-full w-full object-cover"
							/>
						</div>
					{:else}
						<div
							class="flex aspect-video items-center justify-center bg-linear-to-br from-slate-100 to-slate-200"
						>
							<Award class="h-16 w-16 text-slate-300" />
						</div>
					{/if}
					<div class="flex flex-1 flex-col p-6">
						<h3 class="text-midnight-900 mb-2 text-lg font-semibold">{program.title}</h3>
						{#if program.excerpt}
							<p class="mb-4 flex-1 text-sm text-slate-600">{program.excerpt}</p>
						{/if}

						<div class="mb-4 flex flex-wrap gap-4 text-sm">
							{#if program.level}
								<div class="flex items-center gap-1.5 text-slate-500">
									<Users class="text-budo-red-500 h-4 w-4" />
									<span>{program.level}</span>
								</div>
							{/if}
						</div>

						{#if getFeaturesList(program.features).length > 0}
							<ul class="mb-4 space-y-1.5">
								{#each getFeaturesList(program.features).slice(0, 4) as feature, i (i)}
									<li class="flex items-start gap-2 text-xs text-slate-600">
										<Award class="text-budo-red-500 mt-0.5 h-3 w-3 shrink-0" />
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						{/if}

						<a
							href="/{data.locale}/programs/{program.slug}"
							class="text-budo-red-500 hover:text-budo-red-600 text-sm font-medium transition-colors duration-200"
						>
							{data.locale === 'en' ? 'More information' : 'Más información'} →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-midnight-500 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-white">
			{data.locale === 'en' ? 'Ready to start?' : '¿Listo para comenzar?'}
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-slate-300">
			{data.locale === 'en'
				? 'Join our community and start your martial arts journey. Contact us for more information about schedules and pricing.'
				: 'Únete a nuestra comunidad y comienza tu camino en las artes marciales. Contáctanos para más información sobre horarios y precios.'}
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button variant="primary" size="lg" href="/{data.locale}/branches">
				{data.locale === 'en' ? 'Find a Dojo' : 'Encontrar un Dojo'}
			</Button>
			<Button variant="gold" size="lg" href="/{data.locale}/about">
				{data.locale === 'en' ? 'Learn about WBKL' : 'Conocer la WBKL'}
			</Button>
		</div>
	</div>
</section>
