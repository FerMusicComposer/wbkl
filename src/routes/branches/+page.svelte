<script lang="ts">
	import { ArrowLeft, MapPin, User } from 'lucide-svelte';
	import { members } from '$lib/data/content';

	let selectedCountry = $state<string | null>(null);

	const countries = [
		{
			id: 'spain',
			name: 'España',
			flag: '🇪🇸',
			dojoCount: 5,
			description: 'Dojos en Madrid, Barcelona, Valencia y más'
		},
		{
			id: 'brazil',
			name: 'Brasil',
			flag: '🇧🇷',
			dojoCount: 4,
			description: 'Presencia fuerte en São Paulo, Río y otras ciudades'
		},
		{
			id: 'chile',
			name: 'Chile',
			flag: '🇨🇱',
			dojoCount: 3,
			description: 'Dojos en Santiago y principales ciudades'
		},
		{
			id: 'uruguay',
			name: 'Uruguay',
			flag: '🇺🇾',
			dojoCount: 2,
			description: 'Dojos en Montevideo y zonas cercanas'
		},
		{
			id: 'japan',
			name: 'Japón',
			flag: '🇯🇵',
			dojoCount: 3,
			description: 'Dojos en Tokyo, Osaka y otras ciudades'
		}
	];

	const dojos: Record<
		string,
		{ id: string; name: string; city: string; address: string; instructor: string }[]
	> = {
		spain: [
			{
				id: 'madrid-1',
				name: 'Dojo Central Madrid',
				city: 'Madrid',
				address: 'Calle Gran Vía 45',
				instructor: 'Sensei Carlos García'
			},
			{
				id: 'barcelona-1',
				name: 'Dojo Barcelona',
				city: 'Barcelona',
				address: 'Av. Diagonal 123',
				instructor: 'Sensei María López'
			},
			{
				id: 'valencia-1',
				name: 'Dojo Valencia',
				city: 'Valencia',
				address: 'Calle Colón 78',
				instructor: 'Sensei Pedro Martínez'
			},
			{
				id: 'sevilla-1',
				name: 'Dojo Sevilla',
				city: 'Sevilla',
				address: 'Calle Sierpes 32',
				instructor: 'Sensei Ana Fernández'
			},
			{
				id: 'bilbao-1',
				name: 'Dojo Bilbao',
				city: 'Bilbao',
				address: 'Gran Vía 56',
				instructor: 'Sensei Juan Pérez'
			}
		],
		brazil: [
			{
				id: 'sao-paulo-1',
				name: 'Dojo São Paulo Central',
				city: 'São Paulo',
				address: 'Av. Paulista 1000',
				instructor: 'Sensei Marcos Silva'
			},
			{
				id: 'rio-1',
				name: 'Dojo Rio de Janeiro',
				city: 'Rio de Janeiro',
				address: 'Rua Copacabana 500',
				instructor: 'Sensei Ana Santos'
			},
			{
				id: 'belo-horizonte-1',
				name: 'Dojo Belo Horizonte',
				city: 'Belo Horizonte',
				address: 'Av. Afonso Pena 200',
				instructor: 'Sensei Paulo Costa'
			},
			{
				id: 'brasilia-1',
				name: 'Dojo Brasília',
				city: 'Brasília',
				address: 'SQN 308 Bloco A',
				instructor: 'Sensei Roberto Lima'
			}
		],
		chile: [
			{
				id: 'santiago-1',
				name: 'Dojo Santiago Central',
				city: 'Santiago',
				address: "Av. Libertador Bernardo O'Higgins 123",
				instructor: 'Sensei Alejandro Muñoz'
			},
			{
				id: 'valparaiso-1',
				name: 'Dojo Valparaíso',
				city: 'Valparaíso',
				address: 'Calle Victoria 456',
				instructor: 'Sensei Claudia Herrera'
			},
			{
				id: 'concepcion-1',
				name: 'Dojo Concepción',
				city: 'Concepción',
				address: "Av. O'Higgins 789",
				instructor: 'Sensei Diego Rojas'
			}
		],
		uruguay: [
			{
				id: 'montevideo-1',
				name: 'Dojo Montevideo Central',
				city: 'Montevideo',
				address: 'Av. 18 de Julio 100',
				instructor: 'Sensei Martín Rodríguez'
			},
			{
				id: 'punta-este-1',
				name: 'Dojo Punta del Este',
				city: 'Punta del Este',
				address: 'Calle 24 250',
				instructor: 'Sensei Laura Gómez'
			}
		],
		japan: [
			{
				id: 'tokyo-1',
				name: 'Dojo Tokyo Hombu',
				city: 'Tokyo',
				address: 'Shibuya-ku 1-2-3',
				instructor: 'Sensei Takeshi Yamamoto'
			},
			{
				id: 'osaka-1',
				name: 'Dojo Osaka',
				city: 'Osaka',
				address: 'Namba 4-5-6',
				instructor: 'Sensei Kenji Tanaka'
			},
			{
				id: 'kyoto-1',
				name: 'Dojo Kyoto',
				city: 'Kyoto',
				address: 'Gion 7-8-9',
				instructor: 'Sensei Hiroshi Nakamura'
			}
		]
	};

	function selectCountry(countryId: string) {
		selectedCountry = countryId;
	}

	function goBack() {
		selectedCountry = null;
	}

	function getCountryName(countryId: string): string {
		return countries.find((c) => c.id === countryId)?.name || '';
	}
</script>

<svelte:head>
	<title>Dojos - World Budo Karate League</title>
	<meta
		name="description"
		content="Encuentra un dojo de Karate Kyokushin cerca de ti. Dojos afiliados a la WBKL en España, Brasil, Chile, Uruguay y Japón."
	/>
</svelte:head>

<!-- Page Header -->
<section
	class="from-midnight-900 via-midnight-800 to-midnight-900 relative flex min-h-150 items-center overflow-hidden bg-linear-to-br py-20 sm:py-28"
>
	<!-- Background Kanji -->
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
				Encuentra un <span class="text-gold-500">Dojo</span>
			</h1>
			<p class="text-xl text-slate-300">
				Descubre los dojos afiliados a la WBKL en todo el mundo y encuentra el más cercano a ti.
			</p>
		</div>
	</div>
</section>

<!-- About Dojos Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-midnight-900 mb-6 text-3xl font-bold">Nuestros Dojos</h2>
			<div class="space-y-4 leading-relaxed text-slate-600">
				<p>
					La <strong class="text-midnight-900">World Budo Karate League</strong> cuenta con una red mundial
					de dojos certificados que ofrecen la más alta calidad de enseñanza en Karate Kyokushin. Cada
					dojo afiliado mantiene los estándares técnicos y filosóficos que nos definen.
				</p>
				<p>
					Actualmente estamos presentes en <strong class="text-midnight-900"
						>España, Brasil, Chile, Uruguay y Japón</strong
					>, con dojos que ofrecen entrenamiento para todas las edades y niveles. Explora nuestros
					dojos por país para encontrar el más adecuado para ti.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Countries / Dojos Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Back Button (shown when country is selected) -->
		{#if selectedCountry}
			<button
				onclick={goBack}
				class="hover:text-budo-red-500 mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>Países</span>
			</button>
		{/if}

		<!-- Container with fixed min-height for both views -->
		<div class="min-h-112.5">
			<!-- Countries View -->
			{#if !selectedCountry}
				<div class="mb-12 text-center">
					<h2 class="text-midnight-900 mb-4 text-3xl font-bold">Selecciona un País</h2>
					<p class="mx-auto max-w-2xl text-slate-600">
						Encuentra los dojos afiliados a la WBKL en cada país.
					</p>
				</div>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each countries as country (country.id)}
						<button
							onclick={() => selectCountry(country.id)}
							class="hover:border-budo-red-200 group rounded-xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:shadow-lg"
						>
							<div class="mb-4 text-4xl">{country.flag}</div>
							<h3
								class="text-midnight-900 group-hover:text-budo-red-500 mb-2 text-xl font-semibold transition-colors duration-200"
							>
								{country.name}
							</h3>
							<p class="mb-2 text-sm text-slate-600">{country.description}</p>
							<p class="text-budo-red-500 text-sm font-medium">
								{country.dojoCount} dojos
							</p>
						</button>
					{/each}
				</div>
			{:else}
				<!-- Dojos View -->
				<div class="mb-8">
					<h2 class="text-midnight-900 text-3xl font-bold">
						Dojos en {getCountryName(selectedCountry)}
					</h2>
					<p class="mt-2 text-slate-600">Dojos afiliados a la WBKL en este país.</p>
				</div>
				<div class="max-h-100 overflow-y-auto pr-2">
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each dojos[selectedCountry] as dojo (dojo.id)}
							<div
								class="hover:border-budo-red-200 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-lg"
							>
								<div class="mb-4 flex items-start justify-between">
									<h3 class="text-midnight-900 text-lg font-semibold">{dojo.name}</h3>
								</div>
								<div class="space-y-2">
									<div class="flex items-center gap-2 text-sm text-slate-600">
										<MapPin class="text-budo-red-500 h-4 w-4" />
										<span>{dojo.city}</span>
									</div>
									<p class="text-sm text-slate-600">{dojo.address}</p>
									<p class="text-midnight-800 text-sm font-medium">{dojo.instructor}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Members Section -->
				{#if members[selectedCountry] && members[selectedCountry].length > 0}
					<div class="mt-12">
						<h3 class="text-midnight-900 mb-6 text-2xl font-bold">Miembros Afiliados</h3>
						<p class="mb-6 text-slate-600">
							Miembros de la WBKL en {getCountryName(selectedCountry)}.
						</p>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{#each members[selectedCountry] as member (member.id)}
								<div class="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
									<div
										class="bg-budo-red-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
									>
										<User class="text-budo-red-500 h-5 w-5" />
									</div>
									<div>
										<h4 class="text-midnight-900 font-semibold">{member.name}</h4>
										{#if member.title}
											<p class="text-budo-red-500 text-sm font-medium">{member.title}</p>
										{/if}
										<p class="text-sm text-slate-600">{member.dan}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</section>
