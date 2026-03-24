<script lang="ts">
	import { programs } from '$lib/data/content';
	import { Clock, Award, Users } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const kyokushinPrograms = programs.filter((p) => p.category === 'kyokushin');
	const combatPrograms = programs.filter((p) => p.category === 'combat');
</script>

<svelte:head>
	<title>Programas - World Budo Karate League</title>
	<meta
		name="description"
		content="Descubre nuestros programas de entrenamiento: Kyokushin para adultos y niños, Kickboxing, Boxeo y Krav Maga. Clases para todos los niveles."
	/>
</svelte:head>

<!-- Page Header -->
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
				Nuestros <span class="text-gold-500">Programas</span>
			</h1>
			<p class="text-xl text-slate-300">
				Ofrecemos una variedad de programas de artes marciales para todas las edades y niveles.
			</p>
		</div>
	</div>
</section>

<!-- Kyokushin Programs Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">Karate Kyokushin</h2>
			<p class="max-w-3xl text-slate-600">
				El estilo de contacto completo más practicado del mundo. Desarrolla fuerza, disciplina
				técnica y espíritu indomable.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			{#each kyokushinPrograms as program (program.id)}
				<article
					class="hover:border-budo-red-200 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-lg"
				>
					{#if program.image}
						<div class="relative aspect-video overflow-hidden">
							<img src={program.image} alt={program.title} class="h-full w-full object-cover" />
							<div
								class="from-midnight-900/80 absolute inset-0 bg-linear-to-t to-transparent"
							></div>
							<div class="absolute bottom-4 left-4">
								{#if program.featured}
									<span
										class="bg-budo-red-500 rounded-full px-3 py-1 text-xs font-medium text-white"
									>
										Programa Destacado
									</span>
								{/if}
							</div>
						</div>
					{/if}
					<div class="p-6">
						<h3 class="text-midnight-900 mb-2 text-xl font-semibold">{program.title}</h3>
						<p class="mb-4 text-slate-600">{program.description}</p>

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

						<ul class="mb-6 space-y-2">
							{#each program.features as feature, i (i)}
								<li class="flex items-start gap-2 text-sm text-slate-600">
									<Award class="text-budo-red-500 mt-0.5 h-4 w-4 shrink-0" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<a
							href="/programs/{program.slug}"
							class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
						>
							Más información →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Combat Programs Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">Artes Marciales de Combate</h2>
			<p class="max-w-3xl text-slate-600">
				Programas complementarios para mejorar tu condición física, técnicas de combate y
				habilidades de autodefensa.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each combatPrograms as program (program.id)}
				<article
					class="hover:border-budo-red-200 flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-lg"
				>
					{#if program.image}
						<div class="relative aspect-video overflow-hidden">
							<img src={program.image} alt={program.title} class="h-full w-full object-cover" />
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
						<p class="mb-4 flex-1 text-sm text-slate-600">{program.description}</p>

						<div class="mb-4 flex flex-wrap gap-4 text-sm">
							{#if program.level}
								<div class="flex items-center gap-1.5 text-slate-500">
									<Users class="text-budo-red-500 h-4 w-4" />
									<span>{program.level}</span>
								</div>
							{/if}
						</div>

						<ul class="mb-4 space-y-1.5">
							{#each program.features.slice(0, 4) as feature, i (i)}
								<li class="flex items-start gap-2 text-xs text-slate-600">
									<Award class="text-budo-red-500 mt-0.5 h-3 w-3 shrink-0" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<a
							href="/programs/{program.slug}"
							class="text-budo-red-500 hover:text-budo-red-600 text-sm font-medium transition-colors duration-200"
						>
							Más información →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-midnight-500 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-white">¿Listo para comenzar?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-slate-300">
			Únete a nuestra comunidad y comienza tu camino en las artes marciales. Contáctanos para más
			información sobre horarios y precios.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button variant="primary" size="lg" href="/branches">Encontrar un Dojo</Button>
			<Button variant="gold" size="lg" href="/about">Conocer la WBKL</Button>
		</div>
	</div>
</section>
