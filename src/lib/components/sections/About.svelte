<script lang="ts">
	import { Users, Globe, Award, Heart } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const values = [
		{
			icon: Users,
			title: 'Comunidad',
			description: 'Unidos por el espíritu budo alrededor del mundo'
		},
		{
			icon: Globe,
			title: 'Global',
			description: 'Presentes en más de 80 países y 500 dojos'
		},
		{
			icon: Award,
			title: 'Excelencia',
			description: 'Estándares de calidad mundial en enseñanza y competición'
		},
		{
			icon: Heart,
			title: 'Tradición',
			description: 'Respetando el legado Kyokushin y sus valores fundamentales'
		}
	];
</script>

<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left Column -->
			<div>
				<h2 class="text-midnight-900 mb-6 text-3xl font-bold">
					Sobre la <span class="text-budo-red-500">WBKL</span>
				</h2>
				<p class="mb-4 text-slate-600">
					La World Budo Karate League (WBKL) es la organización internacional que agrupa a las
					federaciones y dojos de Karate Kyokushin más prestigiosos del mundo. Fundada con el
					propósito de preservar y promover el verdadero espíritu del Budo.
				</p>
				<p class="mb-8 text-slate-600">
					Nuestra misión es mantener vivos los valores del Kyokushin: respeto, disciplina,
					perseverancia y espíritu indomable. A través de campeonatos, seminarios y programas de
					certificación, buscamos elevar el estándar del Karate a nivel mundial.
				</p>
				<Button variant="primary" size="lg" href="/about">Conocer más</Button>
			</div>

			<!-- Right Column - Values Grid -->
			<div class="grid grid-cols-2 gap-4 sm:gap-6">
				{#each values as value (value.title)}
					<div
						class="hover:border-budo-red-200 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-lg"
					>
						<div class="bg-budo-red-50 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
							<svelte:component this={value.icon} class="text-budo-red-500 h-6 w-6" />
						</div>
						<h3 class="text-midnight-900 mb-2 text-lg font-semibold">{value.title}</h3>
						<p class="text-sm text-slate-600">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
