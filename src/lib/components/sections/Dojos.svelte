<script lang="ts">
	import { MapPin, Globe, Users, Building } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const stats = [
		{ value: '5', label: 'Países', icon: Globe },
		{ value: '17', label: 'Dojos', icon: Building },
		{ value: '500+', label: 'Miembros', icon: Users }
	];
</script>

<section class="bg-midnight-700 relative overflow-hidden py-16 sm:py-20">
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left Column -->
			<div>
				<h2 class="mb-6 text-3xl font-bold text-white">Encuentra un Dojo</h2>
				<p class="mb-8 text-slate-300">
					La WBKL cuenta con una red mundial de dojos certificados que ofrecen la más alta calidad
					de enseñanza en Karate Kyokushin. Encuentra el dojo más cercano a ti y comienza tu camino
					en el Budo.
				</p>

				<!-- Stats Grid -->
				<div class="mb-8 grid grid-cols-3 gap-4">
					{#each stats as stat (stat.label)}
						<div class="text-center">
							<div class="mb-2 flex items-center justify-center">
								<svelte:component this={stat.icon} class="text-gold-400 h-6 w-6" />
							</div>
							<div class="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
							<div class="text-sm text-slate-400">{stat.label}</div>
						</div>
					{/each}
				</div>

				<Button variant="gold" size="lg" href="/branches">
					<MapPin class="mr-2 h-5 w-5" />
					Buscar Dojo
				</Button>
			</div>

			<!-- Right Column - Map Placeholder -->
			<div class="flex items-center justify-center">
				<div
					class="bg-midnight-800 border-midnight-700 flex aspect-video w-full flex-col items-center justify-center rounded-2xl border"
				>
					<Globe class="mb-4 h-16 w-16 text-slate-600" />
					<p class="text-sm text-slate-500">Mapa interactivo próximamente</p>
				</div>
			</div>
		</div>
	</div>
</section>
