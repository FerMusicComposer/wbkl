<script lang="ts">
	import { page } from '$app/stores';
	import { programs } from '$lib/data/content';
	import { Clock, Award, Users, ArrowLeft } from 'lucide-svelte';

	let slug = $derived($page.params.slug ?? '');
	let program = $derived(programs.find((p) => p.slug === slug));

	function getCategoryLabel(category: string): string {
		switch (category) {
			case 'kyokushin':
				return 'Kyokushin';
			case 'combat':
				return 'Artes Marciales';
			default:
				return 'Programa';
		}
	}

	function getCategoryColor(category: string): string {
		switch (category) {
			case 'kyokushin':
				return 'bg-budo-red-500 text-white';
			case 'combat':
				return 'bg-gold-500 text-midnight-900';
			default:
				return 'bg-midnight-800 text-white';
		}
	}
</script>

<svelte:head>
	{#if program}
		<title>{program.title} - World Budo Karate League</title>
		<meta name="description" content={program.description} />
	{:else}
		<title>Programa no encontrado - World Budo Karate League</title>
	{/if}
</svelte:head>

{#if program}
	<!-- Page Header -->
	<section class="bg-white py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<a
				href="/programs"
				class="hover:text-budo-red-500 mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>Volver a Programas</span>
			</a>
			<div class="mb-4">
				<span
					class="rounded-full px-3 py-1 text-xs font-medium {getCategoryColor(program.category)}"
				>
					{getCategoryLabel(program.category)}
				</span>
			</div>
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold sm:text-4xl">{program.title}</h1>
			<p class="max-w-3xl text-lg text-slate-600">{program.description}</p>
		</div>
	</section>

	<!-- Program Content -->
	<section class="bg-dogi py-12 sm:py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
				<!-- Main Content -->
				<div class="lg:col-span-2">
					{#if program.image}
						<img src={program.image} alt={program.title} class="mb-8 w-full rounded-xl" />
					{/if}

					{#if program.descriptionExtended}
						<div class="mb-8">
							<h2 class="text-midnight-900 mb-4 text-xl font-semibold">Descripción del Programa</h2>
							<p class="leading-relaxed text-slate-600">{program.descriptionExtended}</p>
						</div>
					{/if}

					<!-- Features -->
					<div class="mb-8">
						<h2 class="text-midnight-900 mb-4 text-xl font-semibold">Lo que Aprenderás</h2>
						<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{#each program.features as feature, i (i)}
								<div class="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
									<Award class="text-budo-red-500 mt-0.5 h-5 w-5 shrink-0" />
									<span class="text-slate-700">{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="lg:col-span-1">
					<div class="sticky top-24 rounded-xl border border-slate-200 bg-white p-6">
						<h3 class="text-midnight-900 mb-4 text-lg font-semibold">Información del Programa</h3>

						<div class="space-y-4">
							{#if program.level}
								<div class="flex items-start gap-3">
									<Users class="text-budo-red-500 mt-0.5 h-5 w-5" />
									<div>
										<p class="text-midnight-900 font-medium">Nivel</p>
										<p class="text-sm text-slate-600">{program.level}</p>
									</div>
								</div>
							{/if}

							{#if program.schedule}
								<div class="flex items-start gap-3">
									<Clock class="text-budo-red-500 mt-0.5 h-5 w-5" />
									<div>
										<p class="text-midnight-900 font-medium">Horario</p>
										<p class="text-sm text-slate-600">{program.schedule}</p>
									</div>
								</div>
							{/if}

							<div class="border-t border-slate-200 pt-4">
								<p class="mb-2 text-slate-600">
									¿Interesado en este programa? Visita uno de nuestros dojos afiliados para más
									información.
								</p>
								<a
									href="/branches"
									class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
								>
									Encontrar un Dojo →
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Not Found -->
	<section class="bg-dogi py-16 sm:py-20">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold">Programa no encontrado</h1>
			<p class="mb-8 text-slate-600">El programa que buscas no existe o ha sido eliminado.</p>
			<a
				href="/programs"
				class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
			>
				Volver a Programas
			</a>
		</div>
	</section>
{/if}
