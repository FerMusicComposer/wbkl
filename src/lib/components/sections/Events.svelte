<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Tabs from '$lib/components/ui/Tabs.svelte';
	import { Calendar, MapPin, ArrowRight } from 'lucide-svelte';
	import { events } from '$lib/data/content';

	const tabs = [
		{ id: 'upcoming', label: 'Próximos' },
		{ id: 'championships', label: 'Campeonatos' },
		{ id: 'clinics', label: 'Clínicas' }
	];

	const upcomingEvents = events;
	const championshipEvents = events.filter((e) => e.eventType === 'championship');
	const clinicEvents = events.filter((e) => e.eventType === 'clinic' || e.eventType === 'seminar');

	const eventsByTab: Record<string, typeof events> = {
		upcoming: upcomingEvents,
		championships: championshipEvents,
		clinics: clinicEvents
	};

	let activeTab = $state('upcoming');

	function handleTabChange(tabId: string) {
		activeTab = tabId;
	}

	function getTypeBadge(type: string): {
		label: string;
		variant: 'default' | 'secondary' | 'outline';
	} {
		switch (type) {
			case 'championship':
				return { label: 'Campeonato', variant: 'default' };
			case 'clinic':
				return { label: 'Clínica', variant: 'secondary' };
			case 'seminar':
				return { label: 'Seminario', variant: 'secondary' };
			default:
				return { label: 'Evento', variant: 'default' };
		}
	}

	function formatDateBadge(dateStr: string): { day: string; month: string } {
		const months = [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre'
		];
		const monthsShort = [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic'
		];

		const parts = dateStr.split(' ');
		const day = parts[0];
		const monthName = parts[2];

		let month = '';
		for (let i = 0; i < months.length; i++) {
			if (monthName === months[i]) {
				month = monthsShort[i];
				break;
			}
		}

		return { day, month: month || monthName?.substring(0, 3) || '' };
	}
</script>

<section class="bg-dogi-100 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">Eventos</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600">
				Descubre los próximos campeonatos, clínicas y seminarios de la WBKL alrededor del mundo.
			</p>
		</div>

		<!-- Tabs -->
		<Tabs {tabs} {activeTab} onTabChange={handleTabChange}>
			{#snippet children(activeTab)}
				<!-- Event Cards -->
				<div class="space-y-4">
					{#each eventsByTab[activeTab] as event (event.slug)}
						<a
							href="/events/{event.slug}"
							class="group hover:border-budo-red-200 flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-lg"
						>
							<!-- Date Badge -->
							<div
								class="bg-midnight-800 hidden h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg text-white sm:flex"
							>
								<span class="text-xl font-bold">{formatDateBadge(event.date).day}</span>
								<span class="text-xs uppercase">{formatDateBadge(event.date).month}</span>
							</div>

							<!-- Event Info -->
							<div class="min-w-0 flex-1">
								<div class="mb-2 flex flex-wrap items-center gap-2">
									<Badge variant={getTypeBadge(event.eventType).variant}>
										{getTypeBadge(event.eventType).label}
									</Badge>
									{#if event.featured}
										<Badge variant="outline">Destacado</Badge>
									{/if}
								</div>
								<h3
									class="text-midnight-900 group-hover:text-budo-red-500 mb-2 text-lg font-semibold transition-colors duration-200"
								>
									{event.title}
								</h3>
								<div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
									<div class="flex items-center gap-1.5">
										<Calendar class="h-4 w-4" />
										<span>{event.date}</span>
									</div>
									<div class="flex items-center gap-1.5">
										<MapPin class="h-4 w-4" />
										<span>{event.location}</span>
									</div>
								</div>
							</div>

							<!-- Arrow -->
							<div
								class="group-hover:text-budo-red-500 shrink-0 text-slate-400 transition-colors duration-200"
							>
								<ArrowRight
									class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
								/>
							</div>
						</a>
					{/each}
				</div>
			{/snippet}
		</Tabs>

		<!-- Footer -->
		<div class="mt-8 text-center">
			<Button variant="outline" size="lg" href="/events">Ver Todos los Eventos</Button>
		</div>
	</div>
</section>
