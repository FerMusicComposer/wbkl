<script lang="ts">
	import { page } from '$app/stores';
	import { getEvent } from '$lib/data/content';
	import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// Get event from slug
	$: slug = $page.params.slug ?? '';
	$: event = slug ? getEvent(slug) : undefined;

	function getTypeLabel(type: string): string {
		switch (type) {
			case 'championship':
				return 'Campeonato';
			case 'clinic':
				return 'Clínica';
			case 'seminar':
				return 'Seminario';
			default:
				return 'Evento';
		}
	}

	function getTypeColor(type: string): string {
		switch (type) {
			case 'championship':
				return 'bg-budo-red-500 text-white';
			case 'clinic':
				return 'bg-gold-500 text-midnight-900';
			case 'seminar':
				return 'bg-midnight-800 text-white';
			default:
				return 'bg-budo-red-500 text-white';
		}
	}
</script>

<svelte:head>
	{#if event}
		<title>{event.title} - World Budo Karate League</title>
		<meta name="description" content={event.description} />
	{:else}
		<title>Evento no encontrado - World Budo Karate League</title>
	{/if}
</svelte:head>

{#if event}
	<!-- Page Header -->
	<section class="border-b border-slate-200 bg-white py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<a
				href="/news?tab=events"
				class="hover:text-budo-red-500 mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>Volver a Eventos</span>
			</a>
			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="rounded-full px-3 py-1 text-xs font-medium {getTypeColor(event.eventType)}">
					{getTypeLabel(event.eventType)}
				</span>
			</div>
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold sm:text-4xl">{event.title}</h1>
			<div class="flex flex-wrap items-center gap-4 text-slate-600">
				<div class="flex items-center gap-1.5">
					<Calendar class="text-budo-red-500 h-5 w-5" />
					<span>{event.date}</span>
				</div>
				<div class="flex items-center gap-1.5">
					<MapPin class="text-budo-red-500 h-5 w-5" />
					<span>{event.location}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Event Content -->
	<section class="bg-dogi py-12 sm:py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
				<!-- Main Content -->
				<div class="lg:col-span-2">
					{#if event.image}
						<img src={event.image} alt={event.title} class="mb-8 w-full rounded-xl" />
					{/if}
					<p class="mb-8 text-lg leading-relaxed text-slate-600">
						{event.description}
					</p>

					<!-- Schedule -->
					<div class="mb-8">
						<h2 class="text-midnight-900 mb-4 text-xl font-semibold">Programa</h2>
						<p class="text-slate-600">{event.details.schedule}</p>
					</div>

					<!-- Categories -->
					<div class="mb-8">
						<h2 class="text-midnight-900 mb-4 text-xl font-semibold">Categorías</h2>
						<ul class="space-y-2">
							{#each event.details.categories as category, i (i)}
								<li class="flex items-start gap-2 text-slate-600">
									<span class="text-budo-red-500 mt-1">•</span>
									<span>{category}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Requirements -->
					<div class="mb-8">
						<h2 class="text-midnight-900 mb-4 text-xl font-semibold">Requisitos</h2>
						<ul class="space-y-2">
							{#each event.details.requirements as requirement, i (i)}
								<li class="flex items-start gap-2 text-slate-600">
									<span class="text-budo-red-500 mt-1">•</span>
									<span>{requirement}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="lg:col-span-1">
					<div class="sticky top-24 rounded-xl border border-slate-200 bg-white p-6">
						<h3 class="text-midnight-900 mb-4 text-lg font-semibold">Detalles del Evento</h3>

						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<Calendar class="text-budo-red-500 mt-0.5 h-5 w-5" />
								<div>
									<p class="text-midnight-900 font-medium">Fecha</p>
									<p class="text-sm text-slate-600">{event.date}</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<MapPin class="text-budo-red-500 mt-0.5 h-5 w-5" />
								<div>
									<p class="text-midnight-900 font-medium">Ubicación</p>
									<p class="text-sm text-slate-600">{event.location}</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<Clock class="text-budo-red-500 mt-0.5 h-5 w-5" />
								<div>
									<p class="text-midnight-900 font-medium">Sede</p>
									<p class="text-sm text-slate-600">{event.details.venue}</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<Users class="text-budo-red-500 mt-0.5 h-5 w-5" />
								<div>
									<p class="text-midnight-900 font-medium">Participantes</p>
									<p class="text-sm text-slate-600">80+ países esperados</p>
								</div>
							</div>
						</div>

						<div class="mt-6 space-y-3">
							<Button variant="primary" size="lg" class="w-full">Inscribirse</Button>
							<Button variant="outline" size="lg" class="w-full">Compartir Evento</Button>
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
			<h1 class="text-midnight-900 mb-4 text-3xl font-bold">Evento no encontrado</h1>
			<p class="mb-8 text-slate-600">El evento que buscas no existe o ha sido eliminado.</p>
			<a
				href="/news?tab=events"
				class="text-budo-red-500 hover:text-budo-red-600 font-medium transition-colors duration-200"
			>
				Volver a Eventos
			</a>
		</div>
	</section>
{/if}
