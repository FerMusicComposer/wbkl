<script lang="ts">
	import { Sparkles, Flame, Shield, Star, Users } from 'lucide-svelte';
	import { directors } from '$lib/data/content';

	const kyokushinValues = [
		{
			icon: Sparkles,
			title: 'Verdad',
			description: 'La verdad como base del crecimiento personal.'
		},
		{
			icon: Flame,
			title: 'Espíritu Indomable',
			description: 'Perseverancia ante los desafíos.'
		},
		{
			icon: Shield,
			title: 'Contacto Pleno',
			description: 'Combate real sin protecciones.'
		},
		{
			icon: Star,
			title: 'Excelencia',
			description: 'Aspirar a lo más alto en técnica y carácter.'
		}
	];

	const timeline = [
		{
			year: '1970',
			title: 'Fundación del Kyokushin',
			description:
				'Sosai Masutatsu Oyama funda la Organización Internacional de Karate Kyokushin, estableciendo las bases del estilo de contacto completo.'
		},
		{
			year: '1995',
			title: 'Expansión Global',
			description:
				'El Kyokushin se expande a más de 100 países, convirtiéndose en uno de los estilos de karate más practicados del mundo.'
		},
		{
			year: '2015',
			title: 'Creación de la WBKL',
			description:
				'Se funda la World Budo Karate League para unificar y promover los valores del Kyokushin a nivel mundial, preservando su espíritu auténtico.'
		},
		{
			year: '2020',
			title: 'Certificación Internacional',
			description:
				'La WBKL lanza su programa de certificación internacional para instructores, estableciendo estándares de calidad mundial.'
		},
		{
			year: '2025',
			title: 'Campeonato Mundial',
			description:
				'La WBKL organiza el Campeonato Mundial de Kyokushin más grande de la historia, con participantes de más de 80 países.'
		}
	];
</script>

<svelte:head>
	<title>Sobre la WBKL - World Budo Karate League</title>
	<meta
		name="description"
		content="Conoce la historia, misión y valores de la World Budo Karate League. Preservamos el espíritu del Kyokushin Karate en más de 80 países."
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
				Sobre la <span class="text-gold-500">WBKL</span>
			</h1>
			<p class="text-xl text-slate-300">
				Conoce nuestra historia, misión y el equipo que guía a la organización.
			</p>
		</div>
	</div>
</section>

<!-- About Organization Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-midnight-900 mb-6 text-3xl font-bold">Nuestra Organización</h2>
			<div class="space-y-4 leading-relaxed text-slate-600">
				<p>
					Nuestra organización de Karate Kyokushin WBKL con fundación en Japón, es sin fines de
					lucro (NPO). La cual nace para dar apoyo a un gran número de personas que buscan el camino
					del verdadero Karate Kyokushin.
				</p>
				<p>
					La World Budo Karate League apoya y promueve dando aval a nuestra organización mundial, la
					misma funciona desde 1981 y es dirigida por
					<strong class="text-midnight-900">Soke Masahiro Motomura</strong>.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- About Kyokushinkai Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<h2 class="text-midnight-900 mb-6 text-3xl font-bold">
					¿Qué es el <span class="text-budo-red-500">Kyokushinkai</span>?
				</h2>
				<div class="space-y-4 leading-relaxed text-slate-600">
					<p>
						El <strong class="text-midnight-900">Kyokushinkai</strong> significa "Escuela de la más
						alta verdad", derivado de tres vocablos: <em>Kyou</em> (lo más alto),
						<em>Shin</em> (verdad o realidad) y <em>Kai</em> (reunión o asociarse).
					</p>
					<p>
						Fundado por el maestro <strong class="text-midnight-900">Masutatsu Oyama</strong> en 1964,
						este arte marcial combina lo mejor del boxeo, muay thai, goju ryu y shotokan, creando una
						técnica de contacto pleno donde la victoria en kumite se logra únicamente por KO.
					</p>
					<p>
						La <strong class="text-midnight-900">World Budo Karate League</strong> representa estos mismos
						valores, preservando la esencia del Kyokushinkai auténtico y promoviendo la mejora personal
						y mental a través del camino del guerrero.
					</p>
				</div>
			</div>

			<div>
				<h3 class="text-midnight-900 mb-4 text-xl font-semibold">Los Valores del Kyokushinkai</h3>
				<p class="mb-6 text-slate-600">
					Principios que la WBKL adopta y promueve en todos sus dojos afiliados.
				</p>
				<div class="grid grid-cols-2 gap-3">
					{#each kyokushinValues as value (value.title)}
						<div
							class="bg-dogi hover:border-budo-red-200 rounded-xl border border-slate-200 p-3 transition-all duration-200 hover:shadow-lg"
						>
							<div class="bg-budo-red-50 mb-2 flex h-8 w-8 items-center justify-center rounded-lg">
								<svelte:component this={value.icon} class="text-budo-red-500 h-4 w-4" />
							</div>
							<h4 class="text-midnight-900 text-sm font-semibold">{value.title}</h4>
							<p class="mt-1 text-xs leading-tight text-slate-600">{value.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Timeline Section -->
<section class="bg-midnight-800 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-dogi mb-4 text-3xl font-bold">Nuestra Historia</h2>
			<p class="mx-auto max-w-2xl text-slate-200">
				Un recorrido por los hitos más importantes en la historia del Kyokushin y la WBKL.
			</p>
		</div>
		<div class="relative">
			<!-- Timeline Line -->
			<div
				class="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-slate-300 md:block"
			></div>

			<!-- Timeline Items -->
			<div class="space-y-12">
				{#each timeline as item, index (item.year)}
					<div class="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
						<div class="md:w-1/2 {index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-3'}">
							<div
								class="hover:shadow-dogi-300 hover:border-budo-red-300 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-md"
							>
								<span class="text-gold-500 text-lg font-bold">{item.year}</span>
								<h3 class="text-midnight-900 mt-2 mb-2 text-xl font-semibold">{item.title}</h3>
								<p class="text-sm text-slate-600">{item.description}</p>
							</div>
						</div>
						<!-- Timeline Dot -->
						<div
							class="bg-budo-red-500 z-10 hidden h-4 w-4 rounded-full border-4 border-white shadow-md md:order-2 md:flex"
						></div>
						<div class="md:w-1/2 {index % 2 === 0 ? 'md:order-3' : 'md:order-1'}"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Leadership Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-midnight-900 mb-4 text-3xl font-bold">Equipo Directivo</h2>
			<p class="mx-auto max-w-2xl text-slate-600">
				El equipo que guía a la WBKL hacia el futuro, manteniendo el legado del Kyokushin.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each directors as person (person.id)}
				<div
					class="hover:border-budo-red-200 rounded-xl border border-slate-200 bg-white p-5 text-center transition-all duration-200 hover:shadow-lg"
				>
					{#if person.image}
						<img
							src={person.image}
							alt={person.name}
							class="mx-auto mb-3 h-24 w-24 rounded-full object-cover"
						/>
					{:else}
						<div
							class="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200"
						>
							<Users class="h-12 w-12 text-slate-400" />
						</div>
					{/if}
					<h3 class="text-midnight-900 text-base font-semibold">{person.name}</h3>
					<p class="text-budo-red-500 mt-1 text-xs font-medium">{person.title}</p>
					<p class="text-sm text-slate-600">{person.role}</p>
					{#if person.countryFlag}
						<p class="mt-1 text-xs text-slate-500">{person.country} {person.countryFlag}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
